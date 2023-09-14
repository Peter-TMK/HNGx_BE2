### CRUD REST-API

A simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice. Your API should dynamically handle parameters, such as adding or retrieving a person by name.

### Prerequisites & Dependencies

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [Git](https://git-scm.com/downloads)
- [npm](https://www.npmjs.com/get-npm)
- dotenv
- express
- joi
- mongoose

### Set-up & Installation

1. Fork the repository and clone it to your local machine.

```
$ git clone git@github.com:Peter-TMK/HNGx_BE2.git

OR

$ git clone https://github.com/Peter-TMK/HNGx_BE2.git

```

2. Navigate to the project directory.

```
cd HNGx_BE2
```

3. Install the project dependencies.

```
$ npm install
```

4. Copy the contents of `example.env` to a new file called `.env` and fill in the required environment variables.

```
cp .env.example .env
```

5. Start the development server.

```
$ npm start
```

### Development Workflow

1. Create a new branch for the feature you want to work on.

```
$ git checkout -b feature/feature-name
```

2. Make your changes.
3. Commit your changes.

```
$ git add .
$ git commit -m "commit message"
```

4. Pull from the upstream `dev` branch to get the latest changes.

```
$ git pull upstream main
```

5. Push your changes to your remote branch.

```
$ git push origin feature/feature-name
```

6. Create a pull request to the `main` branch.
7. Wait for your pull request to be reviewed and merged.

### The source code for the API

https://github.com/Peter-TMK/HNGx_BE2

### UML diagrams (or links to view them)

link here
