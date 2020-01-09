import express from 'express';
import path from 'path';
import appConfig from './configs/app.config';
import * as dbConnect from './db/index';

const PORT = appConfig.PORT;

const app = express();

dbConnect.connect();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '..', appConfig.CLIENT_PATH)));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '..', appConfig.CLIENT_PATH, 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node listening on port ${PORT}`);
});
