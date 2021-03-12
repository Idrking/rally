UPDATE organizations
SET application_config = $1
WHERE id = $2;