# Accessing GitLab

1. Make sure you are connected to VPN.
2. Navigate to https://gitlab.grammarly.io/
3. Log in with Okta. If you do not have GitLab in Okta, submit an IT ticket.

# Generating your SSH keys

You only need to do this once. You will use the same public key for all applications that need it (mainly GitLab, but there may be others in the future)

# Instructions:

* Open Terminal (Launchpad → Terminal)
* Type ssh-keygen -t rsa -C first.last@grammarly.com
  * Don’t forget to replace first.last@grammarly.com with your Grammarly account
* When you are asked to enter a file name - hit enter / return
* When you are asked to enter a passphrase - hit enter / return
* A public and private key will have been created in ~/.ssh.
  * id_rsa is your private key (do not share)
* id_rsa.pub is your public key (to share).
* To copy the public key to your clipboard, open Terminal and type pbcopy < ~/.ssh/id_rsa.pub
* [Only if you have a Windows laptop] Save private key as id_rsa to your user folder C:\Users\{$USER}\.ssh 

# Adding your SSH key to Gitlab

Once you generate your .ssh key, you will need to add it to your GitLab profile.

* Go to https://gitlab.grammarly.io/ and log in with your OKTA credentials
* Navigate “Edit profile” by clicking on your initial in the top right corner of the navigation on the left side of the window.
* Select “SSH Keys” in the left-hand sidebar.
* Copy the content of your key into the key field and select Add key
* To test:
  * Type ssh -T git@ssh.gitlab.grammarly.io in your terminal window
  * When prompted with “Are you sure you want to continue connecting (yes/no/[fingerprint])?” - type “yes”
  * If the key was added correctly, you should see Welcome to Gitlab, @YOUR NAME! message.