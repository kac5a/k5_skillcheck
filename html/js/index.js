var startAngle
var segmentLength

var segmentStartPositions = {
  //Possible start angle positions for each difficulty. The lower the start angle, the harder to hit
  easy: [140, 150, 160, 170, 180, 190, 200],
  normal: [
    90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230,
  ],
  hard: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
}
var segmentLengths = {
  //Possible segment length for each difficulty. Minimum 0.0, max 1.0.
  easy: [0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
  normal: [0.08, 0.09, 0.1, 0.11, 0.12],
  hard: [0.04, 0.05, 0.06, 0.07],
}

var speeds = {
  easy: 0.6,
  normal: 1,
  hard: 1.2,
}

window.addEventListener('message', function (event) {
  if (event.data.data == 'start') {
    startSkillCheck(event.data.difficulty ? event.data.difficulty : 'normal')
  }
})

function startSkillCheck(difficulty) {
  let startSound = new Audio('assets/start.ogg')
  let successSound = new Audio('assets/success.ogg')
  let failSound = new Audio('assets/fail.ogg')

  startSound.play()

  setTimeout(() => {
    $('.line').css('display', 'flex')
    $('.space').css('display', 'flex')
    $('.shadow').css('display', 'flex')

    let bar = new ProgressBar.Circle('#circle', {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1,
      color: '#fff',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null,
    })

    getNewCircle(bar, difficulty)

    let angle = 0
    let inSegment = false

    let timer = setInterval(() => {
      $('.line').css('transform', `rotate(${angle}deg)`)
      angle += speeds[difficulty]
      if (angle >= 360) {
        finishCircle(false)
      }
      inSegment =
        angle >= startAngle && angle < startAngle + 360 * segmentLength
    }, 1)

    document.addEventListener('keydown', handleSpacePress)

    function handleSpacePress(key) {
      if (key.code === 'Space') {
        if (inSegment) {
          finishCircle(true)
        } else {
          finishCircle(false)
        }
      }
    }

    function finishCircle(success) {
      success ? successSound.play() : failSound.play()
      $.post(
        'https://k5_skillcheck/result',
        JSON.stringify({
          result: success,
        })
      )
      angle = 0
      inSegment = false
      $('.line').css('transform', `rotate(0deg)`)
      $('.line').css('display', 'none')
      $('.space').css('display', 'none')
      $('.shadow').css('display', 'none')
      bar.destroy()
      clearInterval(timer)
      document.removeEventListener('keydown', handleSpacePress)
    }
  }, 1000)
}

function getRand(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getNewCircle(bar, difficulty) {
  startAngle = getRand(segmentStartPositions[difficulty])
  segmentLength = getRand(segmentLengths[difficulty])
  $('#circle').css('transform', `rotate(${startAngle}deg)`)
  bar.animate(segmentLength)
}
