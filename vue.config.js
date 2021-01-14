// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/retrieve-git-commit-example/dist/' : '/',
};
