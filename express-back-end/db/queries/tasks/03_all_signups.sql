SELECT users.*
FROM users
JOIN approved_users ON users.id = user_id
JOIN signups ON approved_users.id = approved_user_id
WHERE signsup.task_id = $1;