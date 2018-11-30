class Form {
  constructor(id) {
    this.obj = document.querySelector(id);
  }
  onSubmit(callback) {
    this.obj.addEventListener('submit', callback);
  }
  getObj() {
    return this.obj
  }
}
class Input {
  constructor(id) {
    this.obj = document.querySelector(id);
  }
  getValue() {
    return this.obj.value;
  }
}
