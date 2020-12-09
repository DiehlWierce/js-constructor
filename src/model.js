import image from "./assets/image.png";
import { Block } from "./classes/blocks";

export const model = [
  new Block("title", "Конструктор сайтов на чистом JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
      "user-select": "none",
    },
  }),
  new Block("image", image, {
    styles: {
      padding: "2rem 0",
      display: "grid",
      "justify-content": "center",
    },
    alt: "Это картинка",
    imageStyles: {
      width: "500px",
      height: "auto",
    },
  }),
  new Block(
    "columns",
    [
      "Приложение на чистом JS, без использования библиотек",
      "Узнаешь, как работают принципы SOLID и ОПП в JS за один курс",
      "JS - это просто, интересно. Научись создавать любые UI своими руками",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new Block("text", "this text from another model type", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
