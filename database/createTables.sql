/* -----------------------------------------------------------------
Script to create the Simple To Do App Database
*** Note this will delete all tables and therefore delete all data
-------------------------------------------------------------------*/

-- Assume database has been created and we are logged into the 
--  database as user pf_computer_access

-- Drop tables in reverse order of creation
DROP TABLE IF EXISTS todo_items;
DROP TABLE IF EXISTS login;

CREATE TABLE login(
  id SERIAL PRIMARY KEY,
  email CITEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  signup_date TIMESTAMP NOT NULL
);

CREATE TABLE todo_items(
  id SERIAL PRIMARY KEY,
  item CITEXT NOT NULL,
  login_id INTEGER REFERENCES login(id) NOT NULL,
  display_order INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);
