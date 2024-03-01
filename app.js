import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
