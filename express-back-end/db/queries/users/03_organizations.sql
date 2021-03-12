SELECT organizations.*
FROM organizations
JOIN approved_users ON organizations.id = organization_id
WHERE user_id = $1 AND approved = true;