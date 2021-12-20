const process = require('child_process');

const getCurrentCommitID = () => {
	try {
		const lastGITCommitID = process.execSync('git rev-parse HEAD');
		if(!lastGITCommitID)
			throw new Error('Could not fetch the commit ID.');

		return lastGITCommitID.toString();
	} catch(e) {
		console.log(e);
	}
};

module.exports = {getCurrentCommitID};