const deliverError = (errMessage) =>
  `500: Internal Server Error. \n Error: ${errMessage}`;

module.exports = { deliverError };
