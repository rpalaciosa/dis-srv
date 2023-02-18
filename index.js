import express  from "express" ;
import cors from "cors" ;
import discoRoutes from './routes/disco.routes.js';

const app = express();

const port = 3001;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use('/disco', discoRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});