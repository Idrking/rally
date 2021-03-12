DROP TABLE IF EXISTS pending_applications CASCADE;
CREATE TABLE pending_applications (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  answers JSON
);
ALTER TABLE pending_applications OWNER TO labber;