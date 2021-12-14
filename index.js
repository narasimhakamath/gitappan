const getVendor = (repositoryURL) => {
	let platform;

	if(repositoryURL.indexOf('//') > -1) {
		platform = repositoryURL.split('/')[2];
	} else {
		platform = repositoryURL.split('/')[0];
	}

	platform = platform.split(':')[0];
	platform = platform.split('?')[0];
	platform = platform.split('.')[0];

	return platform;
}