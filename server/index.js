import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import invoiceRoutes from './routes/invoicesRoutes.js';
import soumissionRoutes from './routes/SoumissionRoutes.js';
import inspectionRoutes from './routes/inspectionRoutes.js';

const app = express();
app.use(bodyParser.json({ 'limit': '30mb', 'extended': true }));
app.use(bodyParser.urlencoded({ 'limit': '30mb', 'extended': true }));


const corsOptions = {
    origin: 'http://localhost:3000',  // Update this to the URL of your React app
};

app.use(cors(corsOptions));


app.use('/invoices', invoiceRoutes);
app.use('/soumissions', soumissionRoutes);
app.use('/inspections', inspectionRoutes);



const dbURI = 'mongodb://localhost:27017/servitech'; // For local MongoDB
const port = 5000;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch(err => console.error('Connection error:', err));

