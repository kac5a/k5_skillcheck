local inSkillCheck
local result

function startSkillCheck(difficulty)
	print(difficulty)
	SetNuiFocus(true, false)
	SendNUIMessage({data = "start", difficulty = difficulty})
end

RegisterNUICallback('result', function(data, cb)
  SetNuiFocus(false, false)
	result = data.result
	inSkillCheck = false
end)

function skillCheck(difficulty)
	if inSkillCheck then return end
	inSkillCheck = true
	startSkillCheck(difficulty)
	while inSkillCheck do
		Citizen.Wait(1)
	end

	Citizen.Wait(100)

	return result
end