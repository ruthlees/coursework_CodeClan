DROP TABLE bites CASCADE;
DROP TABLE zombies CASCADE;
DROP TABLE victims CASCADE;


CREATE TABLE zombies (
 id SERIAL8 PRIMARY KEY,
 name VARCHAR(255) not null,
 type VARCHAR(255),
 victim_id INT8 references victims(id)
 );

CREATE TABLE victims (
 id SERIAL8 PRIMARY KEY,
 name VARCHAR(255),
 run_speed VARCHAR(255),
 zombie INT8 references zombies(id)
 );

CREATE TABLE bites (
  id SERIAL8 PRIMARY KEY,
  victim_id INT8 references victims(id),
  zombie_id INT8 references zombies(id),
  infected_on DATE not null
);

INSERT INTO zombies(name, type) VALUES ('Andy', 'Crawler');
INSERT INTO zombies(name, type) VALUES ( 'Barry', 'Walker');
INSERT INTO zombies(name, type) VALUES ('Jane', 'Walker');
INSERT INTO zombies(name, type) VALUES ('April', 'Runner Bearded');

INSERT INTO victims(name, run_speed, zombie) VALUES ('Bagder', 'slow', 1);
INSERT INTO victims(name, run_speed, zombie) VALUES ('Horse', 'fast', 4);
INSERT INTO victims(name, run_speed, zombie) VALUES ('Dog', 'fast', 3);
INSERT INTO victims(name, run_speed, zombie) VALUES ('Cow', 'slow', 2);

INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (1, 1, 'Jan 12 2017');
INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (2, 2, 'Jan 20 2017');
INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (3, 3, 'Jan 23 2017');
INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (1, 2, 'Jan 12 2017');

SELECT * FROM zombies WHERE name = 'Barry';

SELECT victim_id FROM bites WHERE zombie_id = 1;

SELECT name FROM victims WHERE id = 1 or id = 2;

-- SELECT name FROM victims WHERE id IN(1, 2); you can use this for the above query too!
