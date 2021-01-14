import repoInfoJSON from './json/repo-profile.json';
import commitsJSON from './json/commits.json';

export function getRepoInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(repoInfoJSON);
    }, 500);
  });
}

export function getCommitsFromRepo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(commitsJSON);
    }, 500);
  });
}
