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

CREATE TABLE user (
id int(10) auto_increment not null,
first_name varchar(100) not null,
last_name varchar(100) not null,
user_name varchar(10) not null,
address varchar(250) not null,
email varchar(50) not null,
password varchar(10) not null,
primary key (id)
);