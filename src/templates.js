import { row, col } from "./utils";

function title(block) {
  const { tag = "h1", styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

function text(block) {
  return row(col(`<p>${block.value}</p>`));
}

//в мап передается функция в которую кидается колбек
//join для удаления запятых
function columns(block) {
  const html = block.value.map(col).join("");
  return row(html);
}

function image(block) {
  return row(col(`<img src=${block.value} />`));
}

//т.к. ключ и название функции - значение - совпадают, то пишем одно слово

export const templates = {
  title,
  text,
  columns,
  image,
};
