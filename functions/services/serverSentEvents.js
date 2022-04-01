const Sse = {};

//todo: dictionary van maken
Sse.clients = [];

Sse.connect = async(id, res) => {
	const headers = {
		"Content-Type": "text/event-stream",
		Connection: "keep-alive",
	};
	res.writeHead(200, headers);
	setInterval(function () {client.res.write("event:end\n"); client.res.write("data:hello\n\n");}, 4000);
	// setInterval(function () {client.res.write(":\n\n");}, 4000);


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

module.exports = Sse;