DROP DATABASE IF EXISTS deals_db;
CREATE DATABASE deals_db;
USE deals_db;

CREATE TABLE userinfo(
    id INTEGER AUTO_INCREMENT,
    user_name VARCHAR(255) not null UNIQUE,
    email VARCHAR(255) not null UNIQUE,
    password VARCHAR(255) not null,
    city VARCHAR(255) not null,
    PRIMARY KEY(id)
);

CREATE TABLE user_favs(
    userid INTEGER AUTO_INCREMENT,
    cities VARCHAR(255) not null,
	categories VARCHAR(255) not null,
    promotions_type VARCHAR(255) not null,
    PRIMARY KEY(userid)
);
