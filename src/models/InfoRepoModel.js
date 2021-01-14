class InfoRepoModel {
  constructor(id, title, type, choice) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.choice = choice;
    this.disabled = false;
  }

  set setDisabled(disabled) {
    this.disabled = disabled;
  }

  get getDisabled() {
    return this.disabled;
  }
}

export default InfoRepoModel;
