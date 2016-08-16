function route(handle, pathname, response)
{
	console.log("URL : " + pathname);
	if(typeof(handle[pathname]) === function) 
	{
		handle[pathname](response);
	}
	else 
	{
		util.log("Unrecognized handle " + pathname);

	}
}

exports.route = route;