var NodeHelper = require("node_helper");
const { spawn } = require('child_process');
const path=require('path')
// add require of other javascripot components here
// var xxx = require('yyy') here
module.exports = NodeHelper.create({
	launchit(payload){

		let handler
		if(payload.debug) console.log("PythonPrint spawning "+payload.command+" using "+payload.pythonName)
		handler = spawn(payload.pythonName, ['-u', payload.command]);

		handler.stdout.on('data', (data) => {
			if(payload.debug) console.log("PythonPrint sending program output="+data+" identifier="+payload.identifier)
			this.sendSocketNotification("message_from_helper", { identifier: payload.identifier, message: data.toString() } )
		})

		handler.stderr.on('data', (data)=>{
			if(payload.debug) console.log("PythonPrint program error="+data)
		})

		handler.on('error', (error)=>{
			if(payload.debug) console.log("PythonPrint spawn error="+data)
		})
	},


	startit(payload){
		let self = this
		if(payload.command.startsWith(payload.pythonName))
			payload.command=payload.command.slice(payload.pythonName.length)
		if(payload.localfolder)
			payload.command=__dirname+path.sep+payload.command
		if(payload.repetative)
			this.launchit(payload)
		else{
			  this.launchit(payload)
				setInterval( ()=>{ self.launchit() }, self.config.cycletime )
		}

	},


	// handle messages from our module// each notification indicates a different messages
	// payload is a data structure that is different per message.. up to you to design this
	socketNotificationReceived(notification, payload) {
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		// if config message from module
		if (notification === "CONFIG") {
			// wait 15 (default) seconds, send a message back to module
			this.startit(payload)
		}

	},

});