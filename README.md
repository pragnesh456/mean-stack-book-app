# Project Title Mean-stack Book-APP

## Prerequisites

### Node.js
- Install the latest version of Node.js from the [official website](https://nodejs.org/).
  
### Angular
- Angular requires Node.js version 16. Make sure you have Node.js 16 installed. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple versions of Node.js on your machine.

  ```sh
  # Install nvm (if not already installed)
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

  # Load nvm
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

  # Install Node.js 16
  nvm install 16

  # Use Node.js 16
  nvm use 16
## NPM INSTALL:- Go to the server and client folders and run npm install in both folders

## Run Project command
- Front:- cd client, npm run start
- Server:- cd server, node app.js

