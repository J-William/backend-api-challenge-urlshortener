require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const isValidUrl = require('./isValidUrl.js')

const port = process.env.PORT || 3000;
let urls = [];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
	res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/api/shorturl/:surl', function(req, res) {
	const index = req.params.surl;
	if (index >= 0 && index <= urls.length) {
		res.redirect(urls[index]);1
	} else {
		res.json({error: 'invalid url'});
	}
})

app.post('/api/shorturl', function(req, res) {
	console.log(req.body.url);
	if (isValidUrl(req.body.url)) {
		const surl = urls.push(req.body.url) - 1;
		res.json({original_url: req.body.url, short_url: surl})
	} else {
		res.json({error: 'invalid url'});
	}
})


app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});
