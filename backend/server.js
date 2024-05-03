import express from 'express';
import { connect } from 'mongoose';
import  bodyParser from 'body-parser';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connect('mongodb://localhost/mern_project', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/students', studentRoutes);

// Start the server
const port = process.env.PORT || 5000;   // localhost 5000
app.listen(port, () => console.log(`Server running on port ${port}`));
