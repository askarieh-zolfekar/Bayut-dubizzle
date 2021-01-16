const octokit = require('../starter/octokit');

export function getPublicGists() {
    return octokit.default.gists.listPublic();
}

export function getPublicGistsByUsername(username) {
    return octokit.default.gists.listForUser({username});
}

