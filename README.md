# MMM-PythonPrint

doc for [MMM-PythonPrint](https://github.com/sdetweil/MMM-PythonPrint)

## Install:

* Clone this modules URL from github

* Edit `config.js` and add a block like this:

	```js
	{
		module:"MMM-PythonPrint",
		position:"center",
		disabled:false,
		config: {
			// name of the python process to execute (could be python3)
			pythonName: 'python',
			// command file in module folder
			// if false, YOU will provide the full path to the python program
			localfolder: true,

			// spawn a python pgm that writes over and over (timed maybe), but keeps running
			command: 'printit.py',
			repetative: true,

			// spawn a one time output  script, but relaunch it every cycletime milliseconds

			// repretative: false,
			// command: 'printitonce.py',
			// cycletime: 2000,   // only used in repetative:false

			// print debugging messages from the node_helper
			debug: true
		}
	}
	```

## Styling

The class `PythonPrint` is added to the css.

To change the color of the print, add to `custom.css`:

```css
.MMM-PythonPrint .PythonPrint {
	color: red;
}
```

# how to pick which mode to  use

maybe your python script starts and runs, prints one line, and ends. current temp is x

is that all you want your module to present, one line?

or do you want the output every few seconds minutes

this is **repetative:false**, but my module will rerun the script every cycle time milliseconds

but some python scripts do that internally.

print, sleep, print, sleep, print, sleep, print…

this is **repetative: true**
my module will just start the python script

there are two different ways to capture the output

should have named parm

script_is_long_running

I provided a sample of each

also, in many cases, you are using someone else’s script and don’t have control over how it works, and don’t want to rewrite it
