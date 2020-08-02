# ansible_githubwebhook_deployment
Uses ansible and github webhook to automatically pull from github when there is a push. Useful for remote servers.

server.js in webhookhandle listens to port 8000: If a post request is made then it looks for the ref field and figures out what branch was pushed to based on that. This is currently not secure (I didn't bother to learn how webhook secrets work or any authentication for this small project. I recommend you do)


The pull.yml playbook will be run which pulls the branch and then kills all node services running with the forever module, and then starts the server.js found in master.
  This was made for another project of mine so that last bit will probably be removed if you want to use it for your own purposes.

Credit:
https://gist.github.com/devynspencer/effa29af449c46477ac71213210e7043 how to pull from a private repo on github
