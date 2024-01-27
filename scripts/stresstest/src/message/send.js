const fetch = require("node-fetch");
const fs = require("fs");
let config = require("./../../config.json");
module.exports = sendMessage;
async function sendMessage(account) {
	let body = {
		fingerprint: "805826570869932034.wR8vi8lGlFBJerErO9LG5NViJFw",
		content: "Test",
		tts: false
	};
	let x = await fetch(config.url + "/channels/" + config["text-channel"] + "/messages", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: account.token
		},
		body: JSON.stringify(body)
	});
	console.log(x);
	x = await x.json();
	console.log(x);
	return x;
}
