
const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

//Initialise express
const app = express();

//Set and configure  Static folder

app.use(express.static(path.join(__dirname, "client")));

//Inject body-parser middleware
app.use(bodyParser.json());

//Generate a set of Vapid Keys for encryption: Private and public.
//cd into the middleware in node_modules and run command "generate-vapid-keys". See screenshot.
//Store Vapid keys in variables, and as environmental variables before deployment.

const publicVapidKey = 'BCG1GstLf8WYNGolMFC8OsIQdjuEPf_C_sDuDjr5Zg9WVS4iCMXOeWlYOeF3Qs_6KfJSY_robOjKQikY_MRiye0';
const privateVapidKeys = 'JRc4xu9RiiOGGGvZhhzyq36s1s6aaTZKkeTimgDVfX4';

webpush.setVapidDetails('mailto:aadusarkodie1@gmail.com', publicVapidKey, privateVapidKeys)


//Create Subscribe Route to service workeer. POST request

app.post('/subscribe', (req, res) => {
	
	//get subscribtion object from body
	const subscription = req.body;// Courtesy of body-parser

	//Send a 201 status . Flags resource been created successfully. Empty object.
	res.status(201).json({});

	//Create and attach a payload(optional). Run it through json.stringify.
	const payload = JSON.stringify({title: "Push test...."});

	//Pass object into sendNotification() function. Part of the nodeJS API
	webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});


//Run the app. 
const port = 3065;

app.listen(port, () => console.log(`Server is running on ${port}`))