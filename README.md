# game-site-app

code to run when starting:
npm init -y

npm i brycptjs
npm i connect-session-sequelize
npm i dotenv
npm i express
npm i express-handlebars
npm i express-session
npm i mysql2
npm i sequelize
npm i fs
npm i path



app idea:
online real-time rock paper scissors

users will create an account and password to be able to use the app
will use SQL to store user data and game data
get and post calls to server api

users can see other user accounts and start/play games with them
turn based only - current idea is chess

live collaboration/interaction: socket.io

WHEN I click login/enter
THEN I am prompted to enter credentials or create a new account
WHEN I enter the portal
THEN I can see a list of other active users and a list of users I am playing a game with
WHEN I click on a user's name
THEN I am presented with the option to initiate a game with them or view score history
WHEN I begin a game
THEN I am taken to a screen to play a game of rock paper scissors
WHEN I view score history
THEN I can see the game history between myself and the user
WHEN I click logout
THEN I am returned to the home page

Use Node.js and Express.js to create a RESTful API.

Use Handlebars.js as the template engine.

Use MySQL and the Sequelize ORM for the database.

Have both GET and POST routes for retrieving and adding new data.

Use at least one new library, package, or technology that we haven’t discussed.

Have a folder structure that meets the MVC paradigm.

Include authentication (express-session and cookies).

Protect API keys and sensitive information with environment variables.

Be deployed using Heroku (with data).

Have a polished UI.

Be responsive.

Be interactive (in other words, accept and respond to user input).
