local inSkillCheck
local result

function startSkillCheck()
	SetNuiFocus(true, false)
	SendNUIMessage({data = "start"})
end

RegisterNUICallback('result', function(data, cb)
  SetNuiFocus(false, false)
	result = data.result
	inSkillCheck = false
end)

function skillCheck()
	if inSkillCheck then return end
	inSkillCheck = true
	startSkillCheck()
	while inSkillCheck do
		Citizen.Wait(1)
	end

	Citizen.Wait(100)

	return result
end