DROP DATABASE IF EXISTS atlas;
CREATE database atlas;
USE atlas;
CREATE TABLE pharmacy (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
street VARCHAR(100) NOT NULL,
city VARCHAR(100) NOT NULL,
state_abbr VARCHAR(2) NOT NULL,
zipcode VARCHAR(5) NOT NULL,
phone VARCHAR(10) NOT NULL,
PRIMARY KEY (id)
);
USE atlas;
CREATE TABLE operations (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
street VARCHAR(100),
city VARCHAR(100),
state_abbr VARCHAR(2),
zipcode VARCHAR(5)L,
phone VARCHAR(10),
PRIMARY KEY (id)
);
USE atlas;
CREATE TABLE support (
id INT NOT NULL AUTO_INCREMENT,
email,
password,
fname VARCHAR(20) NOT NULL,
lname VARCHAR(20) NOT NULL,
street VARCHAR(100),
city VARCHAR(100),
state_abbr VARCHAR(2),
zipcode VARCHAR(5),
PRIMARY KEY (id),
FOREIGN KEY () REFERENCES pharmacy()
);
USE atlas;

USE atlas;
Select * from customers;