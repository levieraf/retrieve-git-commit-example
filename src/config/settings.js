const user = 'levieraf';

const repoName = 'retrieve-git-commit-example';

export const baseGitHubURL = 'https://api.github.com/repos';

export const repoURL = `${baseGitHubURL}/${user}/${repoName}`;

export const commitsURL = `${baseGitHubURL}/${user}/${repoName}/commits?per_page=100`;
