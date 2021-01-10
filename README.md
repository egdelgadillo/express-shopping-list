# express-shopping-list

Javascript-only Hello World-style Express.JS CRUD shopping list application. Proof-of-concept application using the Express.JS framework on Node.JS and Handlebars as HTML template handler, and MongoDB as a database. The application was deployed to Heroku and the database was deployed on cloud.mongodb.com

[Live Demo](https://expressshoppinglist.herokuapp.com/)

## Contents

- [Contents](#contents)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Optional Requirements](#optional-requirements)
- [Installation](#installation)
- [Setting up the Database](#setting-up-the-database)
- [Usage](#usage)
- [Testing](#testing)
- [Heroku Deployment](#heroku-deployment)
  - [Set up the database connection](#set-up-the-database-connection)
  - [Deploy to Heroku](#deploy-to-heroku)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Getting Started

This instructions will follow the steps required to set up the development environment onto your local machine and deploy it as well as how to deploy it to Heroku and the mongoDB cloud services.

As a default configuration the application runs on localhost, port 3000

### Prerequisites

Verify you have NodeJS installed

```bash
node --version

> v12.9.0
```

Verify that you have npm installed

```bash
npm --version

> 6.10.2
```

You need to have git already installed. You can verify the installation:

```bash
git --version

> git version 2.23.0.<dist>.1
```

You will need a valid connection to a MongoDB database. You can run it on your local machine if you [download the Community MongoDB Server](https://www.mongodb.com/download-center/community)

You also need a [Mongo Atlas Account](https://cloud.mongodb.com/) with a cluster and database already created.
The following data will be required later:

- **Atlas MongoDB Username**
- **Atlas MongoDB Password**
- **Atlas MongoDB URL**
- **Atlas MongoDB Database**

You can read more about this on the [Setting up the Database](#setting-up-the-database) section.

### Optional Requirements

You will also need the [Heroku-CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) tool already installed if you want to deploy it there

The express application was made with express-generator. If you want to install it:

```bash
npm install -g express-generator
```

## Installation

Clone the repository

```bash
git clone https://github.com/egdelgadillo/express-shopping-list.git
```

Install the npm dependencies:

```bash
cd express-shopping-list

npm install
```

## Setting up the Database

[Log in](https://cloud.mongodb.com/user#/atlas/login) or [Create an Account](https://cloud.mongodb.com/user#/atlas/register/accountProfile) onto the MongoDB Cloud Services

Create your first free cluster. Copy the "Connection String" to paste it to your app, which should look like this

```text
mongodb+srv://<YOUR-MONGODB-ATLAS-USERNAME>:<YOUR-MONGODB-ATLAS-PASSWORD>@<YOUR-MONGODB-ATLAS-CLUSTER-URL>/<YOUR-MONGODB-ATLAS-DATABASE-NAME>?retryWrites=true&w=majority
```

Now you can export this variables to the application:

```bash
export MONGO_USERNAME=<YOUR-MONGODB-ATLAS-USERNAME>

export MONGO_PASSWORD=<YOUR-MONGODB-ATLAS-PASSWORD>

export MONGO_URL=<YOUR-MONGODB-ATLAS-CLUSTER-URL>

export MONGO_DB=<YOUR-MONGODB-ATLAS-DATABASE-NAME>
```

(_Replace the \<variable> arguments with the values corresponding to your account_)

## Usage

First we need to export the **required** environment variables (Otherwise an error will be thrown):

```bash
export MONGO_USERNAME=<YOUR-MONGODB-ATLAS-USERNAME>

export MONGO_PASSWORD=<YOUR-MONGODB-ATLAS-PASSWORD>

export MONGO_URL=<YOUR-MONGODB-ATLAS-CLUSTER-URL>

export MONGO_DB=<YOUR-MONGODB-ATLAS-DATABASE-NAME>
```

If you wish to specify another port you can set the port as an environment variable:

```bash
export PORT=3000
```

Run the application

```bash
npm start
```

Now you can navigate to the app URL at [http://localhost:3000](http://localhost:3000) or to the port you specified above.

## Testing

No testing has been added to this project as this is just a proof-of-concept application

## Heroku Deployment

We will follow the deployment steps to deploy the application onto Heroku and the database to the mongoDB Cloud services

### Set up the database connection

First grab the **Atlas MongoDB Connection string data** as seen on the [Setting up the Database](#setting-up-the-database) section. It should look like this:

```text
mongodb+srv://<YOUR-MONGODB-ATLAS-USERNAME>:<YOUR-MONGODB-ATLAS-PASSWORD>@<YOUR-MONGODB-ATLAS-CLUSTER-URL>/<YOUR-MONGODB-ATLAS-DATABASE-NAME>?retryWrites=true&w=majority
```

Now open the **conf/mongoConnection.js** file and replace the connection string on **line 23** with the correct connection string from above. It should look like this:

```javascript
mongoose.connect(
  'mongodb+srv://<YOUR-MONGODB-ATLAS-USERNAME>:<YOUR-MONGODB-ATLAS-PASSWORD>@<YOUR-MONGODB-ATLAS-CLUSTER-URL>/<YOUR-MONGODB-ATLAS-DATABASE-NAME>?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);
```

(_Replace the \<variable> arguments with the values corresponding to your account_)

### Deploy to Heroku

If you don't already have one [Create a new Heroku Account](https://signup.heroku.com)

Log in to your Heroku Account using the [Heroku-CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) command

```bash
heroku login
```

Commit all the changes made to the code before deploying

```bash
git add .

git commit -m "Heroku deployment"
```

Create a new Heroku Application using the heroku-cli tool

```bash
heroku apps:create <APPLICATION-NAME>
```

Push the code to the Heroku Cloud

```bash
git push heroku master
```

Export the environment variables to the Heroku app

```bash
heroku config:set MONGO_USERNAME=<YOUR-MONGODB-ATLAS-USERNAME>

heroku config:set MONGO_PASSWORD=<YOUR-MONGODB-ATLAS-PASSWORD>

heroku config:set MONGO_URL=<YOUR-MONGODB-ATLAS-CLUSTER-URL>

heroku config:set MONGO_DB=<YOUR-MONGODB-ATLAS-DATABASE-NAME>
```

Open the deployed application

```bash
heroku open
```

## Built With

[NodeJS](https://nodejs.org/) - The server-side Javascript v8 Engine

[ExpressJS](https://expressjs.com/) - The NodeJS HTTP framework

[Handlebars](https://handlebarsjs.com/) - The HTML template framework

[Express-Generator](https://expressjs.com/en/starter/generator.html) - The ExpressJS template generator

[MongoDB Cloud Services](https://cloud.mongodb.com) - The (free) MongoDB Cloud deployment

[Heroku](https://heroku.com/) - The Application Cloud Deployment Services

## Contributing

The perfect place for collaboration is the [development](https://github.com/egdelgadillo/express-shopping-list/tree/develop) branch. All Pull Requests should be done to that branch, and those changes will eventually be pulled to the master branch.

## Acknowledgements

This code is based on [MitoCode's NodeJS Tutorial](https://www.youtube.com/watch?v=VHOd-RBj1MA&list=PLvimn1Ins-41lVr-SPWF1mdNTzog05TcA)

## License

This work is licensed under a [GNU GENERAL PUBLIC LICENSE](LICENSE).
