SELECT users.*
FROM users
JOIN approved_users ON users.id = user_id
JOIN organizations ON organizations.id = organization_id
WHERE organization_id = $1 AND approved = false;