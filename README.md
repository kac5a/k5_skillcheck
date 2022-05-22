
# K5 Shops

![K5 Skillcheck](https://i.imgur.com/i5D1xpK.jpg)
  

This is a **FREE** and **open** Fivem script that was created for everyone to use. The goal of this script is to create a skillchck system inspired by Dead By Daylight's skillcheck system, that doesn't use HTML canvases. Canvas can require a lot of resources from lower end PCs. This script uses JS, HTML and CSS only and utilizes [progressbar.js](https://github.com/kimmobrunfeldt/progressbar.js).

  

## Demo


Watch the demo here: [YouTube](https://www.youtube.com/watch?v=U9lGNTcdltk)
  

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

This script doesn't work alone, it needs to be called with an export. I created an example script that uses this skillcheck system, which is shown in the demo video. You can get that script here. 

Simple usage with 3 skillchecks before success:

    if  IsControlJustReleased(0, 38) then   
	    Citizen.Wait(1000)
	    local  succeeded = exports["k5_skillcheck"]:skillCheck()
	    if  succeeded  then
		    Citizen.Wait(1000)
			local  succeeded2 = exports["k5_skillcheck"]:skillCheck()
		    if  succeeded2  then
			    Citizen.Wait(1000)
			    local  succeeded3 = exports["k5_skillcheck"]:skillCheck()
			    if  succeeded3  then
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
