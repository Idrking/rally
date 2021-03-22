const tasks = require("../../../routes/tasks");

module.exports = {

  //01_all.sql
  allTasks: `
    SELECT * FROM tasks;
  `,

  //02_specific.sql
  specificTask: `
    SELECT *
    FROM tasks
    WHERE id = $1;
  `,

  //03_all_signups.sql
  allSignups: `
    SELECT users.*
    FROM users
    JOIN approved_users ON users.id = user_id
    JOIN signups ON approved_users.id = approved_user_id
    WHERE signups.task_id = $1;
  `,

  //04_count.sql
  countSignups: `
    SELECT COUNT(*)
    FROM signups
    WHERE task_id = $1;
  `,

  //05_new_task.sql
  newTask: `
    INSERT INTO tasks (name, description, start_date, end_date, spots, image_url, organization_id, location)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id;
  `,

  //06_edit_task.sql
  editTask: ``,

  //07_complete_task.sql
  completeTask: `
    UPDATE tasks
    SET complete = true
    WHERE id = $1;
  `,

  //08_countAll.sql
  countAll:`
    SELECT tasks.id, COUNT(signups.id)
    FROM signups
    FULL OUTER JOIN tasks ON tasks.id = task_id
    WHERE organization_id = $1 AND complete = false
    GROUP BY tasks.id;
  `,

  //09_countAllUser.sql
  countAllUser:`
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
  `
};
