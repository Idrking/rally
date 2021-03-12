SELECT users.*
FROM users
JOIN owners on users.id = user_id
JOIN organizations on organizations.id = organization_id
WHERE organizations.id = $1;