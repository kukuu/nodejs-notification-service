
const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

//Initialise express
const app = express()

//Generate a set of Vapid Keys for encryption: Private and public.
//cd into the middleware in node_modules and run command "generate-vapid-keys". See screenshot.
//Store Vapid keys in variables, and as environmental variables before deployment.

const publicVapidKey = 'BCG1GstLf8WYNGolMFC8OsIQdjuEPf_C_sDuDjr5Zg9WVS4iCMXOeWlYOeF3Qs_6KfJSY_robOjKQikY_MRiye0';
const privateVapidKeys = 'JRc4xu9RiiOGGGvZhhzyq36s1s6aaTZKkeTimgDVfX4';

webpush.setDetails('mailto:aaxxxxx@gmail.com', publicVapidKey, privateVapidKeys)


