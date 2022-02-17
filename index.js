const fs = require('fs');
const process = require('process');
const path = require('path');

class GIT {
	constructor(directoryPath) {
		if(!this._isValidDirectory(directoryPath))
			throw new Error('Invalid directory');
	}

	_isValidDirectory = directoryPath => {
		return fs.existsSync(directoryPath);
	}
}

const Gitappan = (directoryPath) => new GIT(directoryPath);

module.exports = Gitappan;