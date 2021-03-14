module.exports = {

  //01_all.sql
  allTasks:`
    SELECT * FROM tasks;
  `,

  //02_specific.sql
  specificTask:`
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
  `,

  //05_new_task.sql
  newTask:`
    INSERT INTO tasks (name, description, start_date, end_date, spots, image_url, organization_id, location)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
  `,

  //06_edit_task.sql
  editTask:``,

  //07_delete_task.sql
  deleteTask:`
    DELETE FROM tasks
    WHERE id = $1;
  `
};