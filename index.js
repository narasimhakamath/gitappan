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

const isGITRepository = () => {
	const gitResponse = process.execSync('git rev-parse --is-inside-work-tree');
	if(!gitResponse.toString())
		return false;
	return true;
}

module.exports = {getCurrentCommitID, isGITRepository};