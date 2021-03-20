INSERT INTO owners (user_id, organization_id)
VALUES ($1, $2)
RETURNING organization_id;