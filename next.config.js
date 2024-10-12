const isGithubPages = process.env.GITHUB_ACTIONS || false;
const repo = 'asafdari-boop.github.io';

module.exports = {
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  basePath: isGithubPages ? `/${repo}` : '',
  trailingSlash: true,
  output: 'export'
};