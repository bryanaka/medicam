function isPushSupported() {
	if (!('serviceWorker' in navigator)) {
		// Service Workers are not supported.
		return false;
	}

	if (!('PushManager' in window)) {
		// The Push API is not supported.
		return false;
	}

	return true;
}

function submitVolunteerForm() {
	if (document.getElementById('id_notify').checked) {
		registerForPushNotifications();
		return false;
	} else {
		return true;
	}
}

function registerForPushNotifications() {
	var messaging = firebase.messaging();
	messaging.usePublicVapidKey("BCDiNY-X2wzNAhU5UJUMHBwG93L6yn3Tmg3pApCbuHy9cRe6t-acNgCyJOhEjBIcOopQFrgfKbqL8OTtoqbR6i0");

	messaging.getToken().then(function(currentToken) {
		if (currentToken) {
			sendTokenToServer(currentToken);
		} else {
			// Show permission request.
			console.log('No Instance ID token available. Request permission to generate one.');
			// Show permission UI.
			updateUIForPushPermissionRequired();
		}
	}).catch(function(err) {
		console.log('An error occurred while retrieving token. ', err);
		document.getElementById('volunteer-form').submit(); //TODO
	});

	messaging.onTokenRefresh(function() {
		messaging.getToken().then(function(refreshedToken) {
			console.log('Token refreshed.');
			// Send Instance ID token to app server.
			sendTokenToServer(refreshedToken);
		}).catch(function(err) {
			console.log('Unable to retrieve refreshed token ', err);
			document.getElementById('volunteer-form').submit(); //TODO
		});
	});
}

function sendTokenToServer(token) {
	document.getElementById('id_fcm_token').value = token;
	document.getElementById('volunteer-form').submit();
}

function updateUIForPushPermissionRequired() {
	document.getElementById('volunteer-form').submit(); //TODO
}
