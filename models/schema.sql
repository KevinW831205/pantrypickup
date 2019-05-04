DROP DATABASE IF EXISTS pantrydb;
CREATE DATABASE pantrydb;

USE pantrydb;

CREATE TABLE donations (
id int(10) auto_increment not null,
donator varchar(100) not null,
food varchar(100) not null,
size varchar(50) not null,
expiration date,
donated boolean,
primary key (id)
);