import express from 'express';
import dotenv from 'dotenv';
import {connect, ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './route/userRoute'; 
dotenv.config({ path: '.env' }); 
const app = express();
const PORT = process.env.PORT || 3010;
const dbUrl:any=process.env.DB_URI
import cors from 'cors'

app.use(cors());

const connectDb = async () => {
  return connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(() => {
    console.log('Connected to MongoDB');
  }).catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
}
connectDb();
 

app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});

app.use(bodyParser.json());

// User Route
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
