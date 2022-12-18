BEGIN

CREATE USER docker;
CREATE DATABASE docker;
GRANT ALL PRIVILEGES ON DATABASE docker TO docker;


-- CREATE TABLE jr_user (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   first_name text NOT NULL,
--   last_name text NOT NULL,
--   email text NOT NULL,
--   password text NOT NULL,
--   role text DEFAULT 'normal'
-- );

COMMIT
