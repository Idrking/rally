module.exports = {
  
  //01_add.sql
  initialApplication:`
    INSERT INTO approved_users (user_id, organization_id, approved, application)
    VALUES ($1, $2, $3, $4);
  `,

  //02_approve.sql
  approveVolunteer:`
    UPDATE approved_users
    SET approved = TRUE
    WHERE user_id = $1 AND organization_id = $2;
  `
}