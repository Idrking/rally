DROP TABLE IF EXISTS approved_users CASCADE;
CREATE TABLE approved_users (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  approved BOOLEAN DEFAULT FALSE,
  application JSON
);

ALTER TABLE approved_users OWNER TO labber;