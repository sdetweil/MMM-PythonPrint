doc for MMM-PythonPrint


install:

   git clone this modules URL from github


   edit config.js and add a block like this

   ```
	{
		module:"MMM-PythonPrint",
		position:"center",
		disabled:false,
		config:{
			// command file in module folder
			// if false, YOU will provide the full path to the python program
			localfolder:true,

			// spawn a python pgm that writes over and over (timed maybe), but keeps running
			command : 'printit.py',
			repetative:true,

			// spawn a one time output  script, but relaunch it every cycletime milliseconds

			// repretative: false,
			//command: 'printitonce.py',
			cycletime:2000,

			// print debugging messages from the node_helper
			debug: true
		}
	}
	```

	the class PythonPrint is added to the css,

	so to change the color of the print
	add to custom.css
```
	.MMM-PythonPrint .PythonPrint {
	color:red;
	}
  ```