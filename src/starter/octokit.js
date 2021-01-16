const { Octokit } = require("@octokit/rest");

export default new Octokit({
    baseUrl: 'https://api.github.com',
});
