-- MYSQL CLi
sudo mysql -u root -p

-- Mysqldump data
mysqldump activity_db --compact

-- Drop table
drop table user;

-- use database
use activity_db;

-- update data

-- test
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'


CREATE DATABASE activity_db;
show databases;
show tables;

CREATE TABLE todolist_tbl(
    id INT  NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    activity VARCHAR(100) NOT NULL,
    date DATE,
    PRIMARY KEY ( id )
    );

INSERT INTO todolist_tbl(
    name, activity, date ) VALUES (
        'Rachmat', 'Makan', STR_TO_DATE('26-09-2020', '%d-%m-%Y')
    );

CREATE TABLE user(
    id INT  NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    level VARCHAR(100) NOT NULL,
    PRIMARY KEY ( id )
    );
INSERT INTO user(
    name, password, level) VALUES (
        'admin', 'admin', 'admin'
    );