SELECT *
FROM approved_users
WHERE user_id = $1 AND organization_id = $2
AND approved = 'pending';