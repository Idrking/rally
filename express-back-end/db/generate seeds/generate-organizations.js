const faker = require("faker");
const fs = require("fs");

const generateUsers = () => {
  // TABLE INFO
  const NAME = "organizations";
  const ATTRIBUTES =
    "(name, description, primary_email, primary_phone, location, image_url, website)";

  let organizations = "";

  for (let i = 1; i <= 2; i++) {
    let companyName = faker.company.companyName();
    let description = faker.commerce.productDescription();
    let email = faker.internet.email();
    let phone = faker.phone.phoneNumber();
    let city = faker.address.city();
    let imageUrl = faker.image.imageUrl();
    let website = faker.internet.url();

    organizations += `INSERT INTO ${NAME} ${ATTRIBUTES} VALUES ('${companyName}', '${description}', '${email}', '${phone}', '${city}', '${imageUrl}', '${website}');`;
    organizations += "\n";
  }

  return organizations;
};

fs.writeFileSync("../seeds/03_organizations.sql", generateUsers());
