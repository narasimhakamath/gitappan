const fs = require('fs');
const process = require('child_process');
const path = require('path');

class GIT {
	constructor(directoryPath) {
		if(!this._isValidDirectory(directoryPath))
			throw new Error('Invalid directory.');
		if(!this._isGITRepository(directoryPath))
			throw new Error('Invalid GIT repository.');
		this._directoryPath = directoryPath;
	}

	_isValidDirectory = directoryPath => {
		return fs.existsSync(directoryPath);
	}

	_isGITRepository = directoryPath => {
		return fs.existsSync(path.join(directoryPath, '.git'));
	}

	getLastCommitID = () => {
		return process.execSync('git rev-parse HEAD').toString().trim();
	}
}

const Gitappan = (directoryPath) => new GIT(directoryPath);

module.exports = Gitappan;