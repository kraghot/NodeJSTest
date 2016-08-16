var util = require("util");

function route(handle, pathname, response)
{
	console.log("URL : " + pathname);
	if(typeof(handle[pathname]) === 'function')
	{
		handle[pathname](response);
	}
	else
	{
		util.log("404 Unrecognized handle " + pathname);
		response.writeHead(404, {"content-type" :"text-plain"});
		response.write("ERROR\n 404 Not Found");
		response.end();
	}
}

exports.route = route;