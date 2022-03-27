const functions = require("firebase-functions");
const cors = require('cors')({origin: true});

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send({"data": {
      "message": "Hello from Firebase!"
    }});
  });
});
