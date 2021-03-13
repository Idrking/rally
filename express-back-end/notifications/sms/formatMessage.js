
//Accepts an object with keys: name, startDate, id, organization
const formatMessage = (details) => {
  return `
  New Task Available from ${details.organization}
  ${details.name}
  Starting on: ${details.startDate}
  http://rally.com/tasks/${details.id}
  `
};

module.exports = { formatMessage }