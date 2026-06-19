import { range } from 'lodash';

const hexToPixel = (radius, spacing, { q, r }) => ({
  x: (1 + spacing) * ((3 / 2) * q * radius),
  y: (1 + spacing) * ((Math.sqrt(3) / 2) * q * radius + Math.sqrt(3) * r * radius),
});

const toPoints = (sides, radius = 1, rotation = 0) => {
  const delta = (Math.PI * 2) / sides;
  const start = (rotation / 180) * Math.PI;
  const points = range(sides).flatMap((point) => {
    const angle = point * delta + start;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  });
  return points;
};

export { hexToPixel, toPoints };
