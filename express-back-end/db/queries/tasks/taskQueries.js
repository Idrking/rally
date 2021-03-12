module.exports = {

  //01_all.sql
  allTasks:`
    SELECT * FROM tasks;
  `,

  //02_specific.sql
  specificTasks:`
    SELECT *
    FROM tasks
    WHERE id = $1;
  `,

  //03_all_signups.sql
  allSignups:`
    SELECT users.*
    FROM users
    JOIN approved_users ON users.id = user_id
    JOIN signups ON approved_users.id = approved_user_id
    WHERE signups.task_id = $1;
  `,

  //04_count.sql
  countSignups:`
    SELECT COUNT(*)
    FROM signups
    WHERE task_id = $1;
  `
};