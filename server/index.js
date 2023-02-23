const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require ('mongoose');

const app = express ();
mongoose.set ('strictQuery' , true);

app.use (bodyParser.json ());
app.use (cors ({ 'origin' : 'http://localhost:3000' }));


mongoose.connect ('mongodb://localhost:27017/cricketDB')
    .then (()=> {
        app.listen (3000 , ()=> {
            process.stdout.write ('Server Running on port no 3000');
        });
    }).catch (()=> process.stdout.write ('DB Connection error'));