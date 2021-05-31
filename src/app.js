import express from 'express';
import "dotenv/config";
import { getUsers } from './queries.js';
// const env = dotenv.config();

const app = express();
const port = 3000;


// app.use(express.static('public'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {

  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', getUsers)


app.listen(port, () =>
  console.log('App running on port ${port}')
);

