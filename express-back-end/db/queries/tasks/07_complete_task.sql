UPDATE tasks
SET complete = true
WHERE id = $1;