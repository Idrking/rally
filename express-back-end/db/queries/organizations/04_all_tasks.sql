SELECT tasks.*
FROM tasks
WHERE organization_id = $1
AND end_date > CURRENT_DATE;