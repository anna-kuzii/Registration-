import express from 'express';
import path from 'path';
import appConfig from './configs/app.config';
import * as dbConnect from './db/index';
import routes from './routes';

const PORT = appConfig.PORT;

const app = express();

dbConnect.connect();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '..', appConfig.CLIENT_PATH)));

// All remaining requests return the React app, so it can handle routing.
app.use('/', routes);

app.listen(PORT, function() {
  console.error(`Node listening on port ${PORT}`);
});
