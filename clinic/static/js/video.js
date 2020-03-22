function initVideo(token, room, enableLocalVideo) {
	Twilio.Video.connect(token, {
		name: room,
		audio: true,
		video: enableLocalVideo,
		preferredVideoCodecs: ['VP8', 'H264']
	}).then(function(room) {
		console.log("Successfully joined a Room", room);

		room.localParticipant.tracks.forEach(function(publication) {
			if (publication.kind == "video") {
				var track = publication.track;
				document.getElementById('local-media').appendChild(track.attach());
			}
		});

		room.participants.forEach(function(participant) {
			console.log("Participant is connected to the Room", participant.identity);
			handleParticipant(participant);
		});

		room.on('participantConnected', function(participant) {
			console.log("A remote Participant connected", participant);
			document.getElementById('connection-status').innerText = "Connected";
			handleParticipant(participant);
		});

		room.on('participantDisconnected', function(participant) {
  			console.log("Participant disconnected", participant.identity);
  			document.getElementById('connection-status').innerText = "Disconnected";
		});

	}, function(error) {
		console.error("Unable to connect to Room", error.message);
	});
}

function handleParticipant(participant) {
	participant.tracks.forEach(function(participant) {
		if (publication.isSubscribed) {
			var track = publication.track;
			document.getElementById('remote-media').appendChild(track.attach());
		}
	});

	participant.on('trackSubscribed', function(track) {
		document.getElementById('remote-media').appendChild(track.attach());
	});
}

function showPreview() {
	Twilio.Video.createLocalVideoTrack().then(function(track) {
		document.getElementById('local-media').appendChild(track.attach());
	});
}
