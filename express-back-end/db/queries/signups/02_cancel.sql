DELETE FROM signups
WHERE approved_user_id = $1 AND task_id = $2;