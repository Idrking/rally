module.exports =  {

  allOrgs:`
    SELECT *
    FROM organizations;
  `,

  specificOrg:`
    SELECT *
    FROM organizations
    WHERE id = $1;
  `,

  allVolunteers:`
    SELECT users.*
    FROM users
    JOIN approved_users ON users.id = user_id
    JOIN organizations ON organizations.id = organization_id
    WHERE organizations.id = $1;
  `,

  allTasks:`
    SELECT tasks.*
    FROM tasks
    WHERE organization_id = $1
    AND end_date > CURRENT_DATE();
  `,

  appConfig:`
    SELECT application_config
    FROM organizations
    WHERE id = $1;
  `,

  allOwners:`
    SELECT users.*
    FROM users
    JOIN owners on users.id = user_id
    JOIN organizations on organizations.id = organization_id
    WHERE organizations.id = $1;
  `,

  addOrg:`
    INSERT INTO organizations (name, description, primary_email, primary_phone, location, image_url, website, application_config)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
  `,

  editOrg:``,

  editAppConfig:`
    UPDATE organizations
    SET application_config = $1
    WHERE id = $2;
  `,

  deleteOrg:`
    DELETE FROM organizations
    WHERE id = $1;
  `
};