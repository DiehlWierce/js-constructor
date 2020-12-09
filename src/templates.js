import { row, col, css } from "./utils";

function title(block) {
  const { tag = "h1", styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
  const { styles } = block.options;
  return row(col(`<p>${block.value}</p>`), css(styles));
}

//в мап передается функция в которую кидается колбек
//join для удаления запятых
function columns(block) {
  const { styles } = block.options;
  const html = block.value.map(col).join("");
  return row(html, css(styles));
}

function image(block) {
  const { styles, imageStyles, alt } = block.options;
  return row(
    col(`<img src=${block.value} alt='${alt}' style='${css(imageStyles)}' />`),
    css(styles)
  );
}

//т.к. ключ и название функции - значение - совпадают, то пишем одно слово

export const templates = {
  title,
  text,
  columns,
  image,
};
