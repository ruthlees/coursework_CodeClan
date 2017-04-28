DROP TABLE IF EXISTS bounties;

CREATE TABLE bounties(
  id SERIAL8 PRIMARY KEY,
  name VARCHAR(255) not null,
  species VARCHAR(255) not null,
  last_known_location VARCHAR(255) not null,
  bounty_value INT4 not null
);