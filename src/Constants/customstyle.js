export const options = {
  innerSize: 8,
  outerSize: 8,
  color: "193, 11, 111",
  outerAlpha: 0.2,
  innerScale: 0.7,
  outerScale: 5,
  clickables: [
    "a",
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    "label[for]",
    "select",
    "textarea",
    "button",
    ".link",
    {
      target: ".rotating-btc",
      options: {
        innerSize: 12,
        outerSize: 12,
        color: "0, 255, 0",
        outerAlpha: 0.3,
        innerScale: 0.7,
        outerScale: 5,
      },
    },
  ],
};

export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};
