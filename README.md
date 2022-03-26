# PollingSystem_APi

## Description

API where anyone can create questions with options and also add votes to it.

## Features

- Create a question (Add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question → (Note : A question can’t be deleted if one of it’s options has votes)
- Delete an option → (Note : An option can’t be deleted if it has even one vote given to it)

## How to setup the project ?

- Clone the project onto your local machine.
- Run 'npm install' to install required dependencies.
- Run 'npm start' in terminal to start server.
- Visit your app at http://localhost:8000.

## Routes and its methods

- /questions/create (To create a question)
- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)

| ---------- | ---------------------------------- |
| Http Methods | Routes |
| ---------- | ---------------------------------- |
| POST | /questions/create |
| ---------- | ---------------------------------- |
| POST | /questions/:id/options/create |
| ---------- | ---------------------------------- |
| DELETE | /questions/:id/delete |
| ---------- | ---------------------------------- |
| DELETE | /options/:id/delete |
| ---------- | ---------------------------------- |
| PUT | /options/:id/add_vote |
| ---------- | ---------------------------------- |
| GET | /questions/:id |
This is A POLLING SYSTEM API where you can create questions.add options to the questions and add vote to options.
## Key to use while creating question and options

- content >> Creating question
- content >> Creating options

# Directory Structure

- [/config] - Contains Database config file
- [/controllers] - contains Controller files for questions and options
- [/model] - Contain Schema files for Question and Option Models
- [/routes] - contains all route files
- [index.js] - App entry point
