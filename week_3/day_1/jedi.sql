
DROP TABLE lightsabers;
DROP TABLE jedi;

CREATE TABLE jedi (
 id SERIAL8 primary key, 
 name VARCHAR(255),
 age INT2,
darkside BOOLEAN 
);

CREATE TABLE lightsabers(
  id SERIAL8 primary key, 
  owner_id INT8 references jedi(id),
  colour VARCHAR(255) not null,
  hilt_metal VARCHAR(255) not null);

INSERT INTO jedi(name, age, darkside) VALUES ('Luke', 21, false);

INSERT INTO jedi(name, age, darkside) VALUES ('Vader', 100, true);

INSERT INTO jedi(name, age) VALUES ('Obiwan', 33);

UPDATE jedi SET darkside = true;

UPDATE jedi SET darkside = false WHERE name = 'Luke' OR  name = 'Obiwan';

INSERT INTO jedi(name, age, darkside) VALUES ('Anakin', 22, false);

UPDATE jedi SET darkside = true WHERE name = 'Anakin';

UPDATE jedi SET age = 23 WHERE name = 'Anakin';

DELETE FROM jedi WHERE name = 'Luke';

INSERT INTO jedi(name, age, darkside) VALUES ('Obiwan', 33, false);




INSERT INTO lightsabers (owner_id, colour, hilt_metal) VALUES (2, 'green', 'palladium');
INSERT INTO lightsabers (owner_id, colour, hilt_metal) VALUES (3, 'green', 'gold');
INSERT INTO lightsabers (owner_id, colour, hilt_metal) VALUES (4, 'purple', 'silver');


SELECT * FROM lightsabers;