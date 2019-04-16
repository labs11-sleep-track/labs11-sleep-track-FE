# ![logo](https://sleepsta.netlify.com/static/media/sleep.0159858e.png)

# SLEEPSTA
Sleepsta is a mobile application that uses motion tracking to measure your sleep. The Sleepsta web application allows you to visualize your sleep analysis and shows you how to sleep your way to better health.

## Deployment

You can see our Front End deployment here:

https://sleepsta.netlify.com/

## Table of Contents
- [Team](#Team)
- [Motivation](#Motivation)
- [Features](#Features)
- [Prerequisites](#Prerequisites)
- [Installation](#Installation)
- [License](#License)
- [Acknowledgements](#Acknowledgements)

### Team 
|        Members         |                GitHub             |           Title           | 
|------------------------|-----------------------------------|---------------------------|
|     Bhumi Patel        | https://github.com/bhumip214      | Full Stack Web Developer  |
|     Kanek Perez        | https://github.com/KROHNICK       | Full Stack Web Developer  |
|     Kelli Rae Hanson   | https://github.com/kelliraehanson | Full Stack Web Developer  |
|     Olivia Osborn      | https://github.com/olivia-osborn  | Full Stack Web Developer  |
|     Leland R.          | https://github.com/ltrii          | Full Stack Web Developer  |
|     Dillon McElhinney  | https://github.com/dillon-mce     | iOS Developer             |

### Motivation

Sleepsta is a website based off of an app. It was created to make viewing and understanding your sleep quality quick and easy. Maintaining a journal of the amount of sleep you get every month can be a difficult task. Sleepsta is a intuitive and easy-to-use application and website that will do the heavy lifting for you. Just register [here](https://sleepsta.netlify.com/), download the app and start your Sleepsta experience! 

The technical design document for this project is [here](https://docs.google.com/document/d/1lgsDKrwKYQDkBN5p4uRPz3knToZykJBENgGD-aW8E3U/edit?usp=sharing). It outlines the rationale for our tech stack as well as our architectural decisions.

### Features

- Secure User Authentication using OAuth
- Billing utilizing Stripe payment
- Dashboard to view daily, weekly and monthly graphs of sleep data recieved from the Sleepsta app.
- View past sleep data and view your average amount of sleep. 
- Ability to update user account information. 
- Read helpful information to learn healthy ways to improve your sleep.

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` - but first =>

## Prerequisites
You will need the following dependencies:

    "apexcharts": "^3.6.4",
    "axios": "^0.18.0",
    "bootstrap": "^4.3.1",
    "dotenv": "^7.0.0",
    "dotenv-webpack": "^1.7.0",
    "event-emitter": "^0.3.5",
    "moment": "^2.24.0",
    "prop-types": "^15.7.2",
    "react": "^16.8.4",
    "react-alert": "^5.4.0",
    "react-alert-template-basic": "^1.0.0",
    "react-apexcharts": "^1.3.1",
    "react-chartkick": "^0.3.0",
    "react-dom": "^16.8.6",
    "react-redux": "^6.0.1",
    "react-router": "^5.0.0",
    "react-router-dom": "^5.0.0",
    "react-scripts": "2.1.8",
    "react-strap": "^0.0.1",
    "react-stripe-elements": "^2.0.3",
    "reactstrap": "^7.1.0",
    "redux": "^4.0.1",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0",
    "stripe": "^6.28.0",
    "styled-components": "^4.1.3"

## Installation
After forking, clone a copy on your machine with the git clone <repo name> 

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

`yarn start to start the local server on port 3000 (you can change the port if necessary)`

You will be taken to the home page with the option to login upon initialization.

After logging in with Google, you will be taken to the dashboard page with your sleep data. Simply click any daily graph for more information about your nightly sleep for that specific day.

On the Account page you are able to update your account or purchase premium to recieve an additional monthly graph if you wish. 

Sleep Blogs is a page with helpful information where you can learn healthy ways to improve your sleep.

## Built With
* HTML
* CSS
* Styled Components
* Bootstrap, with Reactstrap and react-bootstrap
* React
* Redux

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgements

Thank you for your interest in Sleepsta; we look forward to your feedback! 
—Kelli, Kanek, Olivia, Bhumi, Leland & Dillon