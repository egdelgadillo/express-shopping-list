# expressCompras
Hello World-style Express.JS CRUD shopping list application. Proof-of-concept application using the Express.JS framework on Node.JS and Handlebars for HTML templating, and MongoDB as a database. The application was deployed to Heroku and the database was deployed on cloud.mongodb.com

[Live Demo](https://expresscompras.herokuapp.com/)

## Getting Started
This instructions will follow the steps required to set up the development environment onto your local machine and deploy it as well as how to deploy it to Heroku and the mongoDB cloud services.

As a default configuration the application runs on localhost, port 3000

### Prequisites
Verify you have NodeJS installed

```
# node --version

> v12.9.0
```

Verify that you have npm installed

```
# npm --version

> 6.10.2
```


You need to have git already installed. You can verify the instalation:

```
# git --version

> git version 2.23.0.<dist>.1
```

You will need a valid connection to a MongoDB database. You can run it on your local machine if you [download the Community MongoDB Server](https://www.mongodb.com/download-center/community)

### Optional Requirements
You will also need the [Heroku-CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) tool already installed if you want to deploy it there


The express application was made with express-generator. If you want to install it:

```
# npm install -g express-generator
```
### Instalation

Clone the repository

```
git clone https://github.com/elzeron/expressCompras.git
```

Install the npm dependecies

```
cd expressCompras

npm install
```

if you wish to specify another port you can export the PORT variable, for example on WINDOWS
```
set PORT=3000
```

Run the application

Windows

```
set DEBUG=myapp:* & npm start
```

Linux & MAC

```
DEBUG=myapp:* npm start
```

Open your browser at [127.0.0.1:3000](127.0.0.1:3000) or at the PORT you specified earlier

## Testing

No testing has been added to this project as this is just a proof-of-concept application

## Deployment

We will follow te deployment steps to deploy the application onto Heroku and the database to the mongoDB Cloud services

### Setting up the Database

[Log in](https://cloud.mongodb.com/user#/atlas/login) or [Create an Account](https://cloud.mongodb.com/user#/atlas/register/accountProfile) onto the MongoDB Cloud Services

Create your first free cluster. Copy the "Connection String" to paste it to your app, which should look like this
```
mongodb+srv://<USERNAME>:<PASSWORD>@expressdb-qdtrb.mongodb.net/<DATABASE-NAME>?retryWrites=true&w=majority
```

Replace the \<variable> arguments with the values corresponding to your account


Copy this new connection string to the conf/mongoConnection.js file
```
mongoose.connect('mongodb+srv://<USERNAME>:<PASSWORD>@expressdb-qdtrb.mongodb.net/<DATABASE-NAME>?retryWrites=true&w=majority', { useNewUrlParser: true })
```


If you don't already have one [Create a new Heroku Account](https://signup.heroku.com
)

Log in to your Heroku Account using the [Heroku-CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) command
```
heroku login
```

Commit all the changes made to the code before deploying

```
git commit -m "Heroku deployment"
```

Create a new Heroku Application using the heroku-cli tool

```
heroku apps:create <APPLICATION-NAME>
```

Push the code to the Heroku Cloud

```
git push heroku master
```

Open the deployed application
```
heroku open
```

## Built With

[NodeJS](https://nodejs.org/) - The server-side Javascript v8 Engine

[ExpressJS](https://expressjs.com/) - The NodeJS HTTP framework

[Handlebars](https://handlebarsjs.com/) - The HTML templating framework

[Express-Generator](https://expressjs.com/en/starter/generator.html) - The ExpressJS template generator

[MongoDB Cloud Services](https://cloud.mongodb.com) - The (free) MongoDB Cloud deployment

[Heroku](https://heroku.com/) - The Application Cloud Deployment Services

## Contributing

This is a private repository, therefore no contributing is allowed. If you have any suggestions though, you can message me

## Authors

* **Emiliano Delgadillo** - Original author and programmer

## Acknowledgements

This code is based on [MitoCode's NodeJS Tutorial](https://www.youtube.com/watch?v=VHOd-RBj1MA&list=PLvimn1Ins-41lVr-SPWF1mdNTzog05TcA)
