SELECT COUNT(*)
FROM signups
WHERE approved_user_id = $1;