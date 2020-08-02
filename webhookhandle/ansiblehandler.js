const {exec} = require('child_process');

var run_command = (command) => {
	exec(command, (err, stdout, stderr) => {
		if(err){
			console.log(`error!: ${err.message}`);
			return;
		}
		if(stderr){
			console.log(`stderr!: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
};

exports.run = (ans_playbook_file) => {
	run_command(`sudo ansible-playbook ${ans_playbook_file}`);
}
