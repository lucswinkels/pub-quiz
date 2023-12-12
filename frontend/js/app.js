import { Question } from "./components/Question";

const data = { data: "data" };
const question = new Question(data, document.querySelector("#app"), () => {});

question.test();
