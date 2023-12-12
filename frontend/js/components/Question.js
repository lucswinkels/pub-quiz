import { Create } from "../lib/create";

export class Question {
  constructor(data, element, callback) {
    this.data = data;
    this.element = element;
    this.callback = callback ? callback : () => {};
    this.init();
  }
  init() {
    console.log(this.data);
    Create.Element(
      this.element,
      "div",
      null,
      ["question"],
      () => {
        console.log(1);
      },
      "<h1>Question</h1>"
    );
  }
  test() {
    console.log(this.data);
  }
}
