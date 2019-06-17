CREATE DATABASE burgers_db;

USE burgeres_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMEMNT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
