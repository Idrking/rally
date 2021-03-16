
const formatText = details => {
  return `
  Hello volunteer!
  A new task has been issued by ${details.organization}:

  ${details.name}
  ${details.start_date}
  ${details.description}

  If you're available, or need more details, please visit
  http://rally.com/tasks/${details.id}
  `
}

const formatHTML = details => {
  return `
  <h3>New Task</h3>
  <p> Hello volunteer! </p>
  <p> A new task has been issued by <strong>${details.organization}</strong></p>
  <hr>
  <h3>${details.name}</h3>
  <h4>${details.start_date}</h4>
  <hr>
  <p> If you're available, or need more details, please click below
  <br>
  <a href="http://rally.com/tasks/${details.id}"><button>Signup</button></a>
  `
}


const formatEmailObject = details => {
  return {
    from: '"Rally" <notifications@rally.com>',
    to: "sally@examplevolunteer.com",
    subject: `New Task from ${details.organization}`,
    text: formatText(details),
    html: formatHTML(details)
  };
}

module.exports = { formatEmailObject };