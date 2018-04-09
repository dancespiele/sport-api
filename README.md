# Sport API
This is a backend example using [express](https://expressjs.com/)

## Requirements

* MongoDB
* Node

## Download

`git clone git@github.com:dancespiele/sport-api.git`

Enter to the folder and execute:

```
`yarn` or `yarn install`
```

## Settings

Create database in mongo with the name ***sport***, create an user asigned to it and import the file `collection/users.json`.

`mongoimport --db sport --collection users --file users.json`

Create a script file ***run.sh*** in root path of the project:

```
export SECRET=your secret
export EXP=1
export SERVICE_PORT=8000
export MONGO_USER=your user
export MONGO_PASSWORD= your mongo password
export MONGO_HOST=localhost
export MONGO_DATABASE=sport

node_modules/.bin/nodemon --watch 'app/**/**' ./app/index.js
```

## RUN

`yarn run watch`

## RUN INTEGRATIONS TEST

With the project running:

`yarn test`

## API Docs

With the project running go to the browser to the link `http://localhost:8000/api-docs/`
