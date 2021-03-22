 SELECT tasks.id, COUNT(signups.id)
    FROM signups
    FULL OUTER JOIN tasks ON tasks.id = task_id
    WHERE organization_id = $1 AND complete = false
    GROUP BY tasks.id;