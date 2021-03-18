UPDATE approved_users
SET approved = $1
WHERE user_id = $2 AND organization_id = $3;