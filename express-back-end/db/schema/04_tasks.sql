DROP TABLE IF EXISTS tasks CASCADE;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  start_date DATE,
  end_date DATE,
  spots INTEGER,
  image_url VARCHAR(255) NOT NULL,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  location VARCHAR(255)
);
ALTER TABLE tasks OWNER TO labber;