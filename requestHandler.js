function start(response)
{
	console.log("Start page");
	response.writeHead(200, {"content-type": "text/plain"});
	response.write("Start page");
	response.end();
}


function upload(response)
{
	console.log("Upload Page");
	response.writeHead(200, {"content-type": "text/plain"});
	response.write("Upload page");
	response.end();
}


exports.start = start;
exports.upload = upload;