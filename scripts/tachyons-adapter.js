const theme = require("indigo-tokens");

const themeAdapter = async () => {
  let colors = new Object();
  await Object.keys(theme.colors).map(colorKey => {
    if (typeof theme.colors[colorKey] === "string") {
      colors[colorKey] = theme.colors[colorKey];
    } else if (Array.isArray(theme.colors[colorKey])) {
      theme.colors[colorKey].map((color, i) => {
        colors[`${colorKey}${i}`] = color;
      });
    }
  });

  let lineHeight = [];
  await Object.keys(theme.lineHeights).map(heightKey => {
    lineHeight.push(theme.lineHeights[heightKey]);
  });

  let spacing = [];

  return {
    lineHeight,
    customMedia: [{ m: 550 / 16 }, { l: 750 / 16 }, { xl: 960 / 16 }],
    colors,
    spacing: [
      4 / 16,
      8 / 16,
      12 / 16,
      16 / 16,
      20 / 16,
      24 / 16,
      32 / 16,
      48 / 16,
      64 / 16,
      96 / 16,
      160 / 16,
      288 / 16
    ],
    typeScale: [4.5, 4, 3, 2, 1.5, 1.125, 1, 0.875, 0.75]
  };
};

module.exports = themeAdapter;
