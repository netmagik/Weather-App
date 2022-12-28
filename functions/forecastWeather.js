const fetch = require("node-fetch");
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

exports.handler = async (event, context) => {
  // Access the environment variables using process.env
  try {
    const { q } = event.queryStringParameters;
    return fetch(
      `${BASE_URL}forecast?q=${q}&units=imperial&APPID=${process.env.API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then((data) => {
        return {
          statusCode: 200,
          body: JSON.stringify({ data }),
        };
      });
  } catch (error) {
    return {
      statusCode: 404,
      body: error.toString(),
    };
  }
};
