import image from "./assets/image.png";

export const model = [
  {
    type: "title",
    value: "Конструктор сайтов на чистом JS",
    options: {
      tag: "h2",
      styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem; user-select: none;`,
    },
  },
  {
    type: "text",
    value: "this text from another model type",
  },
  {
    type: "columns",
    value: ["111111111", "222222222", "333333333"],
  },
  {
    type: "image",
    value: image,
  },
];
