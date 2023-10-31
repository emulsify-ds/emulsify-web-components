const StyleDictionary = require('style-dictionary').extend('sd.config.json');

const pixelsToRem = (px) => {
  const rem = 16;
  return `${px / rem}rem`;
};

const appendPX = (value) => {
  return `${value}px`;
};

StyleDictionary.registerTransform({
  name: 'toRem/pxToRem',
  type: 'value',
  matcher(token) {
    return (
      token.type === 'sizing' ||
      token.type === 'spacing' ||
      token.type === 'borderRadius' ||
      token.path[0] === 'breakpoint' ||
      token.path[0] === 'font-size'
    );
  },
  transformer(token) {
    return pixelsToRem(token.value);
  },
});

StyleDictionary.registerTransform({
  name: 'toPX/appendPX',
  type: 'value',
  matcher(token) {
    return token.type === 'borderWidth';
  },
  transformer(token) {
    return appendPX(token.value);
  },
});

StyleDictionary.buildAllPlatforms();
