UPDATE approved_users
SET approved = TRUE
WHERE user_id = $1 AND organization_id = $2;