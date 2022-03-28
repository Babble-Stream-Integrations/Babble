const Sse = {};

Sse.clients = [];

Sse.connect = async(id, res) => {
	const client = {
		id,
		res,
	};
	Sse.clients.push(client);
}

Sse.disconnect = async(id) => {
	Sse.clients = Sse.clients.filter((client) => client.id !== id);
}

Sse.start = async(id, time, duration) => {
	Sse.clients.forEach((client) => {
		if (client.id == id) {
			client.res.write("event: start\n");
			client.res.write(`data: {"time": ${time}, "duration": ${duration}}\n\n`);
		}
	});
}

Sse.end = async(id, winners) => {
	Sse.clients.forEach((client) => {
		if (client.id == id) {
			client.res.write("event: end\n");
			client.res.write(`data: ${winners}\n\n`);
		}
	});
}