console.log('Service Worker Loaded.......');

self.addEventListener('push', e => {
	
	const data = e.data.json();
	console.log('Push Received...');

	//Referencing the notification instance
	self.registration.showNotification(data.title, {
		body: 'Notified by Alex',
		image: 'https://media.licdn.com/dms/image/C5603AQGg8SfkWrq4PA/profile-displayphoto-shrink_200_200/0?e=1579737600&amp;v=beta&amp;t=m6sjjWp95wvM1zjKDrnZ570-bKuAL73ZEvQ6d8jTISM'
		//image: 'http://image.ibb.co/frY0Fd/tmlogo.png'
		

	});
})
