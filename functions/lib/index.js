"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const cors = require('cors')({ origin: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Angular Firebase!");
});
exports.square = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        response.json({ result: Math.pow(request.body.number, 2) });
    });
});
//# sourceMappingURL=index.js.map