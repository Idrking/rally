module.exports =  {

  //01_all.sql
  allOrgs:`
    SELECT *
    FROM organizations;
  `,

  //02_specific.sql
  specificOrg:`
    SELECT *
    FROM organizations
    WHERE id = $1;
  `,

  //03_all_volunteers.sql
  allVolunteers:`
    SELECT users.*
    FROM users
    JOIN approved_users ON users.id = user_id
    JOIN organizations ON organizations.id = organization_id
    WHERE organizations.id = $1 AND approved = 'true'
    ORDER BY users.last_name;
  `,

  //04_all_tasks.sql
  allTasks:`
    SELECT tasks.*
    FROM tasks
    WHERE organization_id = $1
    AND end_date > CURRENT_DATE;
  `,

  //05_app_config.sql
  appConfig:`
    SELECT application_config
    FROM organizations
    WHERE id = $1;
  `,

  //06_all_owners.sql
  allOwners:`
    SELECT users.*
    FROM users
    JOIN owners on users.id = user_id
    JOIN organizations on organizations.id = organization_id
    WHERE organizations.id = $1;
  `,

  //07_add_org.sql
  addOrg:`
    INSERT INTO organizations (name, description, primary_email, primary_phone, location, image_url, website, application_config)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
  `,

  //08_edit_org.sql
  editOrg:``,

  //09_edit_app.sql
  editAppConfig:`
    UPDATE organizations
    SET application_config = $1
    WHERE id = $2;
  `,

  //10_delete_org.sql
  deleteOrg:`
    DELETE FROM organizations
    WHERE id = $1;
  `,
  //11_pending_volunteers.sql
  allPendingVolunteers:`SELECT users.*
  FROM users
  JOIN approved_users ON users.id = user_id
  JOIN organizations ON organizations.id = organization_id
  WHERE organization_id = $1 AND approved = 'pending';`
};