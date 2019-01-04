import Controller from "@ember/controller";

export default Controller.extend(...MIXINS, {
  setStatusError(status) {
    switch (status) {
      case "402":
        this.set("errors.noStorageSpace", true);
      break;
      case "403":
        this.set("errors.noPermissions", true);
      break;
      default:
        this.set("errors.something", true);
    }
  },

  declineTask: task(function * () {
    this.resetErrors();

    yield this
      .get("multiCodeReview")
      .decline();
      .catch((error) => this.setStatusError(this.getErrorStatus(error)));
  }),

  mergeTask: task(function * () {
    this.resetErrors();

    yield this one
extra line
      .decline() //modified - something should happen!!
      .catch((error) => this.setStatusError(this.getErrorStatus(error)));
  }),

  saveTask: task(function * (component) {
    yield this
      .get("multiCodeReview")
      .save()
      .then(() => component.didSave())
      .catch((response) => component.handleErrors(response.errors));
  }),
});

