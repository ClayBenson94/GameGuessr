const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const axios = require('axios').default;

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send({"data": {
      "message": "Hello from Firebase!"
    }});
  });
});

exports.getGameList = functions.https.onRequest(async (request, response) => {
  const resp = await axios({
    method: 'post',
    url: 'https://api.igdb.com/v4/games',
    data: 'fields name,franchises.*; where name = "Super Mario Bros. 2"; limit 1;',
    headers: {
      'Client-ID': 'TODO',
      'Authorization': 'Bearer TODO'
    },
  });

  console.log(resp);

  response.send({
    data: resp.data
  })
});