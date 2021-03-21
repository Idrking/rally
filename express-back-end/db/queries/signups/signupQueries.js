module.exports = {

  //01_signup.sql
  signUp:`
    INSERT INTO signups (approved_user_id, task_id)
    VALUES ($1, $2)
    RETURNING *;
  `,

  //02_cancel.sql
  cancel:`
    DELETE FROM signups
    WHERE approved_user_id = $1 AND task_id = $2;
  `,

  //03_tasks.sql
  tasks:`
    SELECT *
    FROM tasks
    JOIN signups ON tasks.id = task_id
    WHERE approved_user_id = $1 AND complete = false;
  `,

  //04_available.sql
  available:`
    SELECT tasks.*
    FROM tasks
    JOIN organizations ON organizations.id = tasks.organization_id
    JOIN approved_users ON approved_users.organization_id = organizations.id
    WHERE approved_users.user_id = $1 and approved = 'true' AND complete = false;
  `,

  //05_history.sql
  history:`
    SELECT COUNT(*)
    FROM signups
    WHERE approved_user_id = $1;
  `,

  //06_completed.sql
  completed:`
    SELECT tasks.*
    FROM tasks
    JOIN organizations ON organizations.id = tasks.organization_id
    JOIN approved_users ON approved_users.organization_id = organizations.id
    WHERE approved_users.user_id = $1 AND approved = 'true' AND tasks.complete = true;
  `
};