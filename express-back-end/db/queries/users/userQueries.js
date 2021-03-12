const queries = {
  
  //01_all.sql
  allUsers:`
    SELECT *
    FROM users;
  `,

  //02_specific.sql
  specificUser:`
    SELECT *
    FROM users
    WHERE id = $1;
  `,

  //03_organizations.sql
  joinedOrganizations:`
  SELECT organizations.*
  FROM organizations
  JOIN approved_users ON organizations.id = organization_id
  WHERE user_id = $1 AND approved = true;
  `,

  //04_organizations_owned.sql
  ownedOrganizations:`
    SELECT organizations.*
    FROM organizations
    JOIN owners ON organizations.id = organization_id
    WHERE user_id = $1;
  `,

  //05_add_user.sql
  addUser:`
    INSERT INTO users (first_name, last_name, email, profile_image_url)
    VALUES ($1, $2, $3, $4);
  `,
  
  editUser:`
  
  `,
  
  deleteUser:`
  DELETE FROM users
  WHERE id = $1
  `
}

module.exports = queries;