# Simple Vue To Do App

This is a simple Vue To Do App - just to try some things out. It allows users to signup / login - save to-do items,
mark them as complete, delete them, and change their priorities.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

1. Ensure node nd yarn are installed. Since lerna is built on yarn, this uses yarn as the package manager. Node must be at least version 14. This project is just static pages with a contact page - so it does not contain any database.

2. Clone GIT repository and download

```
git clone https://github.com/tomrembrown/ToDoApp.git
cd ToDoApp
```

3. Download and install packages in various directories, and copy files to create .env - which can be done with the following command

```
yarn initial
```

4. Adjust parameters in .env as necessary (note .env files exist in all of client, server, and database)

5. Determine port postgres runs on

```
linux:  sudo netstat -plunt |grep postgres
or in psql terminal type \conninfo
```

6. Build PostgreSQL database, create user, and give user permissions

```
su - postgres (enter postgres user password)
psql --port (port determined for postgresql server)
OR psql -h localhost(or other host name) -U (user able to create databases) --port (port - if not default 5432)
CREATE DATABASE todo;
CREATE ROLE td_computer_access WITH ENCRYPTED PASSWORD (enter password here in single quotes);
GRANT ALL PRIVILEGES ON DATABASE todo TO td_computer_access;
ALTER ROLE "td_computer_access" WITH LOGIN;
CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
\c todo
CREATE EXTENSION IF NOT EXISTS citext;
```

7. Create the database tables

```
yarn run createTables (from root directory)
```

8. a) Development - For development mode, start the servers (command from root directory starts both vue & express servers).

```
yarn run dev
```

8. b) Production - For production mode, first build the bundles

```
yarn run build
```

Second, for production, on the server, run the server using pm2 (process manager) using:

```
yarn run server
```

## Running the tests

Tests are not currently configured

### What the tests do

These tests handle linting with jshint, link checking, and some cross-page and unit tests.

## Built With

- [Node.JS](https://nodejs.org/) - JavaScript runtime that allows server-side JavaScript
- [Express](https://expressjs.com/) - Backend framework
- [Vue.js](https://v3.vuejs.org/) - Frontend framework
- [PostgreSQL](https://www.postgresql.org/) - Database

## Contributing

Please ask Tom Brown (tombrown654321@protonmail.com) if you would like to contribute to this project.

## Authors

- **Tom Brown**

## License

This project is using the MIT license - see the [LICENSE](LICENSE) file for details
