var http 	= require("http");
var util 	= require("util");
var url 	= require("url");


function start(route){

	function onRequest(request, response)
	{
		var pathname = url.parse(request.url).pathname;
		util.log("Received request");

		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Test");
		response.end();
	}

	http.createServer(onRequest).listen(8000);
	util.log("Server started");
	
}

exports.start = start;
