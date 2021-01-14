class CommitModel {
  constructor(result) {
    this.node_id = result.node_id;
    this.commit = result.commit;
    this.committer = result.committer;
  }

  get commiterAvatar() {
    return this.committer?.avatar_url;
  }

  get commitAutor() {
    return `@${this.commit?.author?.name}`;
  }

  get commitMessage() {
    return this.commit?.message;
  }
}

export default CommitModel;
