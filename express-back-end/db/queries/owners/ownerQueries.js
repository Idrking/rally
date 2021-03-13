module.exports = {
  
  //01_add_owner.sql
  addOwner:`
  INSERT INTO owners (user_id, organization_id)
  VALUES ($1, $2);
  `
}