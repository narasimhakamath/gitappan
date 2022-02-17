const fs = require('fs');
const process = require('process');
const command = require('child_process');
const path = require('path');

class GIT {
	constructor(directoryPath) {
		if(!this._isValidDirectory(directoryPath))
			throw new Error('Invalid directory.');
		if(!this._isGITRepository(directoryPath))
			throw new Error('Invalid GIT repository.');
		process.chdir(directoryPath);
		this._directoryPath = directoryPath;
	}

	_isValidDirectory = directoryPath => {
		return fs.existsSync(directoryPath);
	}

	_isGITRepository = directoryPath => {
		return fs.existsSync(path.join(directoryPath, '.git'));
	}

	getLastCommitID = () => {
		return command.execSync(`git rev-parse HEAD`).toString().trim();
	}

	getLastCommitAuthorName = () => {
		return command.execSync(`git log -1 --pretty=format:'%an'`).toString().trim();
	}
}

const Gitappan = (directoryPath) => new GIT(directoryPath);

module.exports = Gitappan;