var NodeHelper = require("node_helper");
const { spawn } = require('child_process');
// add require of other javascripot components here
// var xxx = require('yyy') here
const python='python'
module.exports = NodeHelper.create({
	launchit(){

		let handler
		if(this.config.debug) console.log("PythonPrint spawning "+this.config.command)
		handler = spawn(this.config.pythonName, ['-u', this.config.command]);
		handler.stdout.on('data', (data) => {
			if(this.config.debug) console.log("PythonPrint sending program output="+data)
			this.sendSocketNotification("message_from_helper", data.toString())
		})
		handler.stderr.on('data', (data)=>{
			if(this.config.debug) console.log("PythonPrint program error="+data)
		})
		handler.on('error', (error)=>{
			if(this.config.debug) console.log("PythonPrint spawn error="+data)
		})
	},
	startit(){
		if(this.config.command.startsWith(python))
			this.config.command=this.config.command.slice(python.length)
		if(this.config.localfolder)
			this.config.command=__dirname+'/'+this.config.command
		if(this.config.repetative)
			this.launchit()
		else{
				setInterval( ()=>{ this.launchit() }, this.config.cycletime )
		}

	},


	// handle messages from our module// each notification indicates a different messages
	// payload is a data structure that is different per message.. up to you to design this
	socketNotificationReceived(notification, payload) {
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		// if config message from module
		if (notification === "CONFIG") {
			// save payload config info
			this.config=payload
			// wait 15 seconds, send a message back to module
			this.startit()
		}

	},

});