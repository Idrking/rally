module.exports = {

  //01_signup.sql
  signUp:`
    INSERT INTO signups (approved_user_id, task_id)
    VALUES ($1, $2);
  `,

  //02_cancel.sql
  cancel:`
    DELETE FROM signups
    WHERE approved_user_id = $1 AND task_id = $2;
  `
};