var http 	= require("http");
var util 	= require("util");
var url 	= require("url");


function start(route, handle){

	function onRequest(request, response)
	{
		var pathname = url.parse(request.url).pathname;
		util.log("Received request");

		route(handle, pathname, response);
	}

	http.createServer(onRequest).listen(8000);
	util.log("Server started");
	
}

exports.start = start;
