INSERT INTO organizations (name, description, primary_email, primary_phone, location, image_url, website, application_config)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING id;