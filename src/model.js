import image from "./assets/js-master.png";
import {
  TextBlock,
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов на чистом JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "green",
      "text-align": "center",
      padding: "1.5rem",
      "user-select": "none",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "3rem 0",
      display: "grid",
      "justify-content": "center",
    },
    alt: "Это картинка",
    imageStyles: {
      width: "750px",
      height: "auto",
    },
  }),
  new ColumnsBlock(
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
  new TextBlock("this text from another model type", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
