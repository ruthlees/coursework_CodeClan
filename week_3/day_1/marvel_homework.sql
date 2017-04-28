SELECT * FROM movies;

SELECT name FROM people;

UPDATE people SET name = 'Alastair Hood' WHERE id = 5;

SELECT name FROM people WHERE id = 7;

DELETE FROM movies WHERE title = 'Batman Begins';

INSERT INTO people(name) VALUES ('Steven Meiklejohn');

DELETE FROM people WHERE name = 'Harvey Wheaton';

INSERT INTO movies(title, year, show_time) VALUES ('Guardians of the Galaxy 2', 2017, '00.00');

UPDATE movies SET show_time = '21.30' WHERE title = 'Guardians of the Galaxy';

DELETE FROM people WHERE id IN(1,3,5);

