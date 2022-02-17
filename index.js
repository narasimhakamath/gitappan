const fs = require('fs');
const process = require('process');
const path = require('path');

class GIT {
	constructor(directoryPath) {
		if(!this._isValidDirectory(directoryPath))
			throw new Error('Invalid directory.');

		if(!this._isGITRepository(directoryPath))
			throw new Error('Invalid GIT repository.');
	}

	_isValidDirectory = directoryPath => {
		return fs.existsSync(directoryPath);
	}

	_isGITRepository = directoryPath => {
		return fs.existsSync(path.join(directoryPath, '.git'));
	}
}

const Gitappan = (directoryPath) => new GIT(directoryPath);

module.exports = Gitappan;