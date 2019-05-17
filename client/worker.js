console.log('Service Worker Loaded.......');

self.addEventListener('push', e => {
	
	const data = e.data.jsoon();
	console.log('Push Received...');

	//Referencing the notification instance
	self.registration.showNotification(data.title, {
		body: 'Notified by Alex',
		image: 'http://image.ibb.co/frY0Fd/tmlogo.png'

	});
})

