 SELECT tasks.id, count(signups.id)
  FROM signups
  FULL OUTER JOIN tasks ON task_id = tasks.id
  JOIN organizations ON organizations.id = organization_id
  WHERE organization_id IN (
    SELECT organizations.id
      FROM organizations
      JOIN approved_users ON organizations.id = organization_id
      WHERE user_id = $1 AND approved = 'true'
  )
  GROUP BY tasks.id
