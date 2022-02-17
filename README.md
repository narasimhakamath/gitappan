# gitappan

gitappan is a NPM package to manage GIT repositories in the working system which can be managed by the SSH.

## Installation

Use npm to install gitappan.

```bash
npm i gitappan
```

## Usage

```python
const Gitappan = require('gitappan');

# Initialize the directory/repository
const gitDir = Gitappan(path.join(__dirname, '../directory1');

# Get the last GIT commit's ID
const commit ID = gitDir.getLastCommitID();

# Get the last GIT commit's author
const author = gitDir.getLastCommitAuthorName();
```

## Contributing
Pull requests are welcome, so please feel free to contribute. For major changes, please open an issue to discuss what you would like to change/fix.