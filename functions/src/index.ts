import * as functions from 'firebase-functions';

const cors = require('cors')({origin: true});

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Angular Firebase!");
});

export const square = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.json({result: request.body.number ** 2});
  })
});

export const all = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.json({result: request.body.number ** 2});
  })
});

export const text = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.json({result: request.body.number ** 2});
  })
});

