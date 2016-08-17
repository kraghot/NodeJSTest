var util = require("util");

function route(handle, pathname, response, postData)
{
	console.log("URL : " + pathname);
	if(typeof(handle[pathname]) === 'function')
	{
		handle[pathname](response, postData);
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