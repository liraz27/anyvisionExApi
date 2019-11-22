const mongoUtil = require('../../utils/mongodb');
const Stream = require('node-rtsp-stream');

const addUrl = async (req, res) => {
	const db = mongoUtil.getDB();
	const username = req.body.userName;
	const url = req.body.url;
	const urlObj = {
		userName: username,
		url: url
	};
	try {
		await db.collection('urls').insertOne(urlObj);
		res.sendStatus(200);
	} catch (e) {
		res.sendStatus(500);
		throw new Error(e);
	}
};

const getUrls = async (req, res) => {
	const db = mongoUtil.getDB();
	const username = req.params.userName;
	try {
		const urlsDocuments = await db.collection('urls').find({
			userName: username,
		}).toArray();
		const urlsArray = urlsDocuments.map((document) => {
			return document.url;
		});
		res.send(urlsArray);
	} catch (e) {
		res.sendStatus(500);
		throw new Error(e);
	}
};

const startStreaming = async (req, res) => {
	const url = req.body.url;
	console.log(url);
	try {
		const stream = new Stream({
			name: 'name',
			streamUrl: url,
			wsPort: 9999
			// ffmpegOptions: { // options ffmpeg flags
			//   '-stats': '', // an option with no neccessary value uses a blank string
			//   '-r': 30 // options with required values specify the value after the key
			// }
		});
	} catch (e) {
		console.log(e);
	}
	//   stream.start();
	res.send(true);
};

module.exports = {
	getUrls,
	addUrl,
	startStreaming
};
