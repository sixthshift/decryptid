const hexToPixel = (radius, spacing, { q, r }) => ({
  x: (1 + spacing) * ((3 / 2) * q * radius),
  y: (1 + spacing) * (((Math.sqrt(3) / 2) * q * radius) + (Math.sqrt(3) * r * radius)),
});

const hexToPoints = (radius = 1) => [
  { q: 1, r: 0 },
  { q: 0.5, r: Math.sqrt(3) / 2 },
  { q: -0.5, r: Math.sqrt(3) / 2 },
  { q: -1, r: 0 },
  { q: -0.5, r: -Math.sqrt(3) / 2 },
  { q: 0.5, r: -Math.sqrt(3) / 2 },
].map(({ q, r }) => ({ q: q * radius, r: r * radius }));

export { hexToPixel, hexToPoints };
