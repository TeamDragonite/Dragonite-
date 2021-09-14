/*
These are the tables required to run this application. 
Please create a separate database for these tables inside of your D inside of your DB, e.g. CREATE DATABASE wobble_chat; 
Then 
 */

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title varchar(100) NOT NULL,
  description varchar(65535) NOT NULL,
  likes integer DEFAULT 0,
  dislikes integer DEFAULT 0,
  difficulty varchar(100) NOT NULL,
  CONSTRAINT chk_difficulty CHECK (difficulty IN ('easy', 'medium', 'hard')),
  effortLevel varchar(100) NOT NULL,
  CONSTRAINT chk_effortLevel CHECK (effortLevel IN ('1/2 day', '1 day', '3 days', '7 days', 'more'))
);

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  postId integer REFERENCES posts(id),
  text varchar(5000) NOT NULL
);

CREATE TABLE IF NOT EXISTS techstack (
  id SERIAL PRIMARY KEY,
  name varchar(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS tags (
  postId integer REFERENCES posts(id),
  techId integer REFERENCES techstack(id)
)