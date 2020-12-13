import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import usersRoutes from './routes/usersRoutes.js';

const app = express();
const port = 5000;
const dbUrl =
  'mongodb+srv://gnglab:admin123@crud.j7zoe.mongodb.net/<dbname>?retryWrites=true&w=majority';

//Database
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on('open', () => console.log('Database connected.'));

//Server
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

//Middlewares
app.use(bodyParser.json());

//Routes
app.use('/api/users', usersRoutes);
