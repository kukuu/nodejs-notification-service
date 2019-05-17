
const publicVapidKey = 'BCG1GstLf8WYNGolMFC8OsIQdjuEPf_C_sDuDjr5Zg9WVS4iCMXOeWlYOeF3Qs_6KfJSY_robOjrrerrreret45';

//Check for Service worker
if('serviceWorker' in navigator){
	send().catch(err => console.errror(err));

}

//Handling asynchronous behaviour elegantly with async await
//Register Service Worker, Register Push and Send Push
async function send(){

	//Register Service Worker
	console.log('Registering Service Worker .....')

	const register = await navigator.serviceWorker.register('/worker.js', {
		scope: '/'
	});

	console.log('Service Worker registered....')
}
