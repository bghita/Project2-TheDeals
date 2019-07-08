CREATE TABLE user_favs(
    userid INTEGER AUTO_INCREMENT,
    cities VARCHAR(255) not null,
	categories VARCHAR(255) not null,
    -- Main Categories:local, goods, travel
    --subcategories:
    PRIMARY KEY(userid)
);