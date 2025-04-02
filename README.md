## This a basic app for How to Create a Flask + React Project with Vite | Python Backend + React Frontend


optional (for invoking npm installation )
# fnm env --use-on-cd | Out-String | Invoke-Expression

Create vite app
# npx create-vite 

Enter Project name
# client

Select framework
# React

Select Variant
# JavaScript

Now move inside client folder 
# cd .\client\

Install npm packages
# npm install

Now create a new folder named as 'server' and move inside it 
# cd..
# cd .\server\

Create virtual environment named as venv
# python -m venv venv

Now active virtual environment
# venv\scripts\activate

install dependecy packages (flask)
# pip install flask

run python file inside server directory
# python main.py

For Enabling CROSS Origin request, install Flask-CROSS
# pip install Flask-CORS

At client directory (front end side) install axios for fetch api request
# npm install axios

Note: Backend Server(client) and Front End server should run simultaneously to run axios smoothly otherwise you will get axios connection error in console.
