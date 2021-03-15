SELECT approved_users.id
FROM approved_users
WHERE organization_id = (
  SELECT organization_id
  FROM tasks
  WHERE task.id = $1;)
AND user_id = $2;
