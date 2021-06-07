
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';

// Importing Routes
import underProgressPageRoutes from './routes/underProgressPage.js';

dotenv.config();

const { MONGO_DB_CONNECTION_URL } = process.env;

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Using the routes
app.use('/progresspage', underProgressPageRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_DB_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message)) ;

mongoose.set('useFindAndModify', false);



