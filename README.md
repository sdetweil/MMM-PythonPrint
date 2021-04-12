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
			// the module will add the path
			// if false, YOU must put in the full path to the command
			localfolder:true,

			//
			// the python program does ONE output and then ends
			//
			   command : 'printitonce.py',
			   repretative: false,
			   cycletime:2000	   // how often the program should be executed

			// OR


			//
			// the python program sends output repeatedly and stays running all the time
			//
			//   command : 'printit.py',
			//   repetative:true,


		}
	}
	```