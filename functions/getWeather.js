const fetch = require("node-fetch");
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

exports.handler = async (event, context) => {
  // Access the environment variables using process.env
  try {
    const { lat, lon } = event.queryStringParameters;
    return fetch(
      `${BASE_URL}weather?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response not ok");
        }
        return res.json();
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
