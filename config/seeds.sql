CREATE TABLE userinfo(
    id INTEGER AUTO_INCREMENT,
    user_name VARCHAR(255) not null UNIQUE,
    email VARCHAR(255) not null,
    password VARCHAR(255) not null,
    city VARCHAR(255) not null,
    PRIMARY KEY(id)
);

INSERT userinfo(user_name, email, password, city)
VALUE ("shantell", "shantell87@gmail.com", "password", "oakland"),
("becky", "becky@gmail.com", "password", "hayword")
;