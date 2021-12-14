const path = require('path');
const fs = require('fs');

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

const getSupportedVendorList = () => {
	const directoryPath = path.join(__dirname, 'vendors');
	const vendorJSFiles = fs.readdirSync(directoryPath);
	const vendors = vendorJSFiles.map(vendorFile => vendorFile.split('.')[0]);

	console.log(vendors);
	return vendors;
}

const getBranches = (repositoryURL) => {
	const vendor = getVendor(repositoryURL);
	
	if(!getSupportedVendorList().includes(vendor)) {
		return "Oops! The vendor is not supported.";
	}
}