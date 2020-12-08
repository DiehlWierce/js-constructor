import { model } from "./model";
import { templates } from "./templates";
import "./main.css";

const $site = document.querySelector("#site");

//цикл, в него на каждой итерации вызывается toHTML
//и добавляется
model.forEach((block) => {
  const toHTML = templates[block.type];
  //проверка на наличие чего-либо в toHTML
  if (toHTML) {
    $site.insertAdjacentHTML("beforeend", toHTML(block));
  }
});
