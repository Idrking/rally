DROP TABLE IF EXISTS organizations CASCADE;
CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  primary_email VARCHAR(255) NOT NULL,
  primary_phone VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  application_config JSON
);
ALTER TABLE organizations OWNER TO labber;