export const common_style = {
  font: {
    lineHeight: 1.2,
    fontFamily: 'Lato',
    fontStyle: 'normal',
  },
};
export const yellow = '#FBBC04';
export const black1 = '#303030';

export function circle(rating) {
  let x, y;
  let points = [];
  let h = 19,
    k = 19;
  let r = 16;
  x = r + h;
  y = k;
  let path = `M${x} ${y}`;
  while (x >= h) {
    x = x - 0.5;
    y = k + Math.sqrt(r * r - (x - h) * (x - h));
    points.push([x, y]);
  }
  const temp = points;
  const length = temp.length;
  for (let i = length - 1; i >= 0; i = i - 1) {
    let point = temp[i];
    points.push([2 * h - point[0], point[1]]);
  }
  for (let j = 0; j < length; j = j + 1) {
    let point = temp[j];
    points.push([2 * h - point[0], 2 * k - point[1]]);
  }
  for (let i = length - 1; i >= 0; i = i - 1) {
    let point = temp[i];
    points.push([point[0], 2 * k - point[1]]);
  }
  const onefifth = points.length / 5;
  if (rating > 0 && rating <= 5) {
    points.forEach((p, i) => {
      if (i < onefifth * rating) path = path + ` L${p[0]} ${p[1]}`;
    });
    return path;
  }
  return '';
}
