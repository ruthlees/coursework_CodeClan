

-- SELECT l.colour FROM lightsabers l;


-- SELECT j.name, l.colour, l.hilt_metal FROM jedi j 
-- INNER JOIN lightsabers l 
-- ON j.id = l.owner_id;

-- INNER JOIN return output where common properties matches (usual id )
-- LEFT JOIN return all rows from the LEFT table and only matches rows from the right
-- RIGHT JOIN - opposite of left join

-- SELECT j.name, l.colour, l.hilt_metal FROM jedi j 
-- LEFT jOIN lightsabers l 
-- ON j.id = l.owner_id;



SELECT v.name AS "Victim", b.infected_on, z.name AS "Zombies" FROM victims v INNER JOIN bitings b ON v.id = b.victim_id
INNER JOIN zombies z ON z.id = b.zombie_id;
