SELECT organizations.*
FROM organizations
JOIN owners ON organizations.id = organization_id
WHERE user_id = $1;