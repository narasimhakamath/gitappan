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

	getLastCommit = () => {
		const gitLog = command.execSync(`git log -1`).toString().trim().split(' ');
		if(!gitLog)
			return null;

		return {
			commitID: gitLog[1].split('\n')[0],
			authorName: `${gitLog[2]} ${gitLog[3]}`,
			authorMail: gitLog[4].split(/[<>]+/)[1]
		};
	}
}

const Gitappan = (directoryPath) => new GIT(directoryPath);

module.exports = Gitappan;