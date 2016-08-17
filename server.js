var http 	= require("http");
var util 	= require("util");
var url 	= require("url");


function start(route, handle){

	function onRequest(request, response)
	{
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		util.log("Received request");

		request.setEncoding("utf8");

		request.addListener("data", function(dataChunk)
		{
			postData += dataChunk;
			console.log("received data" + postData);
		});

		request.addListener("end", function(){
			route(handle, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(8000);
	util.log("Server started");
	
}

exports.start = start;
