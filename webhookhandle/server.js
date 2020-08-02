const express = require('express');
app = express();
app.use(express.json());

const port = 3000

const ansible = require('./ansiblehandler.js');

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/test', (req, res) => {
	res.send(ansible.run('/home/ubuntu/express/webhookhandle/playbooks/pull.yml'));
});

app.post('/webhook', (req, res) => {
	let payload = req.body;
	let branch = payload.ref.replace("refs/heads/", "");
	console.log(branch);
	ansible.run(`/home/ubuntu/express/webhookhandle/playbooks/pull.yml --extra-vars \"branch=${branch}\"`);
	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`listening at port:${port}`);
});
