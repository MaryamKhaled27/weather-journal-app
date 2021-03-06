

// Require Express to run server and routes
const express= require('express')
const app = express()
// Start up an instance of app

/*Dependencies*/
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors= require('cors');
 app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port=8000;
const server= app.listen(port, ()=>{
    console.log(`running on localhost:${port}`);
});

// Setup empty JS object to act as endpoint for all routes
 let projectData = {}
//initialise all route with a callback function
app.get('/all',sendData)
function sendData(req,res){
    res.send(projectData);
}

// post route

app.post('/addData', (req,res)=>{
    projectData = req.body;
    res.send({msg:'success'});
});
