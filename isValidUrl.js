const { URL } = require('url');

const protocols = ['http:', 'https:']

function isValidUrl(string) {
	try {
		const url = new URL(string);
		if (protocols.includes(url.protocol)) {
			return true;
		} else {
			return false;
		}
	} catch (err) {
		return false;
	}
}

module.exports = isValidUrl;