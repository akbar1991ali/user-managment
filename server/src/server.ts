import express from 'express';
import dotenv from 'dotenv';
import {connect } from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './route/userRoute'; 
dotenv.config({ path: 'config.dev.env' }); 
const app = express();
const PORT = process.env.PORT || 3010;
const dbUrl:any=process.env.DB_URI
import cors from 'cors'

app.use(cors());

 connect(dbUrl).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});

app.use(bodyParser.json());

// User Route
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
