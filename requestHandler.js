var fs = require("fs");

function start(response, postData)
{
	console.log("Start page");
	// response.write("Start page");
	// response.end();
	response.writeHead(200, {"content-type": "text/html"});
	
	var body = fs.readFileSync("./views/index.html", "utf8");

	response.write(body);	
	response.end();
}


function upload(response, postData)
{
	console.log("Upload Page");
	response.writeHead(200, {"content-type": "text/html"});

	var body = fs.readFileSync("./views/upload.html", "utf8");

	response.write(body);

	console.log(postData);
	response.end();
}


exports.start = start;
exports.upload = upload;