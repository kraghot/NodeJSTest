function route(pathname)
{
	console.log("URL : " + pathname);
	if(typeof(handle[pathname]) === function) 
	{
		handle[pathname]();
	}
	else 
	{
		util.log("Unrecognized handle " + pathname);
	}
}

exports.route = route;