SELECT tasks.*
FROM tasks
JOIN organizations ON organizations.id = tasks.organization_id
JOIN approved_users ON approved_users.organization_id = organizations.id
WHERE approved_users.user_id = $1 AND approved = 'true' AND tasks.complete = true;