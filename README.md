# K5 Skillcheck

![K5 Skillcheck](https://i.imgur.com/i5D1xpK.jpg)

This is a **FREE** and **open** Fivem script that was created for everyone to use. The goal of this script is to create a skillcheck system inspired by Dead By Daylight's system, that doesn't use HTML canvases. Canvas can require a lot of resources from lower end PCs. This script uses JS, HTML and CSS only and utilizes [progressbar.js](https://github.com/kimmobrunfeldt/progressbar.js).

## Demo

Watch the demo here: [YouTube](https://www.youtube.com/watch?v=U9lGNTcdltk)

## Help


If you need any help, you can check out my [Discord](https://discord.com/invite/WmANgpdrgZ)

# Download & Installation

**Using Git**

```
cd resources

git clone https://github.com/kac5a/k5_skillcheck.git [scripts]/k5_skillcheck
```

### Manually

- Download [https://github.com/kac5a/k5_skillcheck](https://github.com/kac5a/k5_skillcheck)

- Put it in your resources directory

### Installation

Add this in your `server.cfg`:

```
ensure k5_skillcheck
```

## Usage

This script doesn't work alone, it needs to be called with an export. I created an example script that uses this skillcheck system, which is shown in the demo video. [You can get that script here](https://github.com/kac5a/k5_skillcheck_example/tree/main). There are 3 difficulty levels that you can add in the function call, "easy", "normal", "hard", but it's not required. If no parameter is defined, the default difficulty is normal.

Simple usage with 3 skillchecks before success:

    if IsControlJustReleased(0, 38) then
    	Citizen.Wait(1000)
    	if exports["k5_skillcheck"]:skillCheck("easy") then
    		Citizen.Wait(1000)
    	    	if exports["k5_skillcheck"]:skillCheck("normal")  then
    			Citizen.Wait(1000)
    			if exports["k5_skillcheck"]:skillCheck("normal") then
    				SuccessFunction() -- This is the event that happens if all 3
    						  -- of the skillchecks succeed
    			else
    				FailFunction1() -- This is the event that happens if
    						-- the user misses the 3rd skillcheck
    			end
    		else
    			FailFunction2() -- This is the event that happens if
    			                -- the user misses the 2nd skillcheck
    		end
    	else
    		FailFunction3() -- This is the event that happens if
    				-- the user misses the 1st skillcheck
    	end
    end

You can create as many steps as you want, you just need to add more if-else statements.

# Last Words

Feel free to fork this repository and edit the script as much as you'd like. This script is free to use and share. If you find anyone selling this for money, please contact me.
