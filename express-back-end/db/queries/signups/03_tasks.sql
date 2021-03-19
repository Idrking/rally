SELECT *
FROM tasks
JOIN signups ON tasks.id = task_id
WHERE approved_user_id = $1 AND complete = false;