const fs = require('fs')

const commits = require('./commits-original.json')
let users = {}
commits.forEach((commit) => {
	const author = commit.author
	const committer = commit.committer

	if (author) {
		commit.author = `${author.id}`
		users[author.id] = { ...commit.commit.author, ...author }
	}
	delete commit.commit.author
	if (committer) {
		commit.committer = `${committer.id}`
		users[committer.id] = { ...commit.commit.committer, ...committer }
	}

	delete commit.commit.committer
})

fs.writeFileSync('./users.json', JSON.stringify(users))
fs.writeFileSync('./commits.json', JSON.stringify(commits))