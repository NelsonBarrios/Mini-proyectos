const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('index');
		res.send(html);
	},
	about: (req, res) => {
		let about = readHTML('about');
		res.send(about);
	},
	music: (req, res) => {
		let music = readHTML('music');
		res.send(music);
	},
	contact: (req, res) => {
		let contact = readHTML('contact');
		res.send(contact);
	}
	
};

module.exports = controller
