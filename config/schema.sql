DROP DATABASE IF EXISTS userinfo_db;
CREATE DATABASE userinfo_db;

USE userinfo_db;

CREATE TABLE userinfo(
    id INTEGER AUTO_INCREMENT,
    user_name VARCHAR(255) not null,
    email VARCHAR(255) not null,
    password VARCHAR(255) not null,
    zip_code INTEGER(5) not null,
    PRIMARY KEY(id)
);
