class InfoRepoModel {
  constructor(result) {
    this.name = result?.name;
    this.owner = result?.owner;
  }

  get ownerAvatarUrl() {
    return this.owner?.avatar_url;
  }

  get ownerLogin() {
    return this.owner?.login;
  }
}

export default InfoRepoModel;
