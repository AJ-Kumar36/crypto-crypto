import { normal } from 'color-blend';

// blendColors([r, g, b, alpha], [r, g, b, alpha], ...)
export function blendColors(...rgbaList) {
  console.log('colors 11:', rgbaList);
  rgbaList = rgbaList.filter(s => s).map(s => {
    if (typeof s === 'string') return rgbaToRgbaArray(s);
    if (s.length > 0) return s;
    return [s.r, s.g, s.b, s.a];
  });
  rgbaList.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (b[0] > a[0]) return -1;
    if (a[1] > b[1]) return 1;
    if (b[1] > a[1]) return -1;
    if (a[2] > b[2]) return 1;
    if (b[2] > a[2]) return -1;
    return a[3] > b[3] ? 1 : -1;
  });
  console.log('colors:', rgbaList);
  let color = rgbaList[0]
  color = { r: +color[0], g: +color[1], b: +color[2], a: +color[3] };
  for (let i = 1; i < rgbaList.length; i++) {
    let next = rgbaList[i];
    next = { r: +next[0], g: +next[1], b: +next[2], a: +next[3] };
    color = normal(color, next);
  }
  return [color.r, color.g, color.b, color.a];
}

export function rgbaArrayToRgba(rgba) {
  return `rgba(${rgba.join(',')})`;
}

export function rgbaToRgbaArray(rgba) {
  const array = [];
  const split = rgba.split(',').map(s => s.trim());
  array[0] = +split[0].slice(split[0].indexOf('(') + 1);
  array[1] = +split[1];
  array[2] = +split[2];
  array[3] = +split[3].slice(0, split[3].indexOf(')'));
}

export function rgbaToRgb(rgba) {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  ctx.fillStyle('#ffffff');
  color = typeof rgba === 'string' ? rgba : `rgba(${rgba.join(',')})`;
  ctx.fillStyle(color);
  ctx.fillRect(0, 0, 10, 10);
  ctx.getImageData(5, 5, 1, 1).data;
  const rgb = [p[0], p[1], p[2]];
  return rgb;
}

export function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function hexToLetter(hexChar){
  if(hexChar.charCodeAt(0) >= 'a'.charCodeAt(0) && hexChar.charCodeAt(0) <= 'f'.charCodeAt(0)){
    return hexChar.toUpperCase()
  }
  else{
    let newChar = hexChar.charCodeAt(0) - '0'.charCodeAt(0)
    return String.fromCharCode(('G'.charCodeAt(0) + newChar))
  }
}

export function rgbToKey(color_array){
  let outputKey = []
  let hexRep = ('' + componentToHex(color_array[0]) + componentToHex(color_array[1]) + componentToHex(color_array[2])).split('');
  console.log(hexRep)
  for (let hexChar of hexRep){
    outputKey.push(hexToLetter(hexChar));
  }
  return outputKey.join('')
}
