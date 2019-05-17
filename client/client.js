
const publicVapidKey = 'BCG1GstLf8WYNGolMFC8OsIQdjuEPf_C_sDuDjr5Zg9WVS4iCMXOeWlYOeF3Qs_6KfJSY_robOjKQikY_MRiye0';

//Check for Service worker
if('serviceWorker' in navigator){
	send().catch(err => console.error(err));

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


	//Register PUsh
	console.log('Registering Push ...');

	const subscription = await register.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToUint8Array(publicVapidKey) 
	});

	console.log('Push Registered ....')

	
	//Register Send
	console.log('Sending Push Notification .......');

	await fetch('/subscribe', {
		method: 'POST',
		body: JSON.stringify(subscription),
		headers:{
			'content-type': 'application/json'
		}
	});
	console.log('Push sent......')

}

//When using your VAPID key in your web app, you'll need to convert the URL safe base64 string
// to a Uint8Array to pass into the subscribe call, which you can do like so:

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
