(function () {

	var http, fs, server;

	http = require('http');
	fs = require('fs');

	server = http.createServer(function (req, res) {
		var ext;
		
		ext = req.url.split('.');
		ext = ext[1];

		if (req.url === '/home' || req.url === '/') {
			res.writeHead(200, {'Content-Type': 'text/html'});
			fs.createReadStream('../index.html').pipe(res);
		} else if (req.url === '/contact-us') {
			res.writeHead(200, {'Content-Type': 'text/html'});
			fs.createReadStream('../contact.html').pipe(res);
		} else if (ext === 'css') {
			res.writeHead(200, {'Content-Type': 'text/css'});
			fs.createReadStream('../style/stylesheet.css').pipe(res);
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			fs.createReadStream('../pagenotfound.html').pipe(res);
		}

	});

	server.listen(3000, '127.0.0.1');
	console.log('Listening to port 3000');

})();