const WORDS = [
  "VISAO",
  "FOCO",
  "NITIDEZ",
  "LENTE",
  "PRISMA",
  "CLAREZA",
  "MVISION",
  "CUIDADO",
];

const GRID_SIZE = 16;

// Small deterministic PRNG so the tile is stable across builds.
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Dir = [number, number];
const DIRECTIONS: Dir[] = [
  [1, 0],
  [0, 1],
  [1, 1],
];

function buildGrid(): string[][] {
  const rng = mulberry32(42);
  const grid: string[][] = Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => "")
  );

  for (const word of WORDS) {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 60) {
      attempts += 1;
      const dir = DIRECTIONS[Math.floor(rng() * DIRECTIONS.length)];
      const maxRow = GRID_SIZE - (dir[1] ? word.length : 1);
      const maxCol = GRID_SIZE - (dir[0] ? word.length : 1);
      if (maxRow < 0 || maxCol < 0) continue;
      const row = Math.floor(rng() * (maxRow + 1));
      const col = Math.floor(rng() * (maxCol + 1));

      let fits = true;
      for (let i = 0; i < word.length; i += 1) {
        const r = row + dir[1] * i;
        const c = col + dir[0] * i;
        const existing = grid[r][c];
        if (existing && existing !== word[i]) {
          fits = false;
          break;
        }
      }
      if (!fits) continue;

      for (let i = 0; i < word.length; i += 1) {
        const r = row + dir[1] * i;
        const c = col + dir[0] * i;
        grid[r][c] = word[i];
      }
      placed = true;
    }
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < GRID_SIZE; r += 1) {
    for (let c = 0; c < GRID_SIZE; c += 1) {
      if (!grid[r][c]) {
        grid[r][c] = alphabet[Math.floor(rng() * alphabet.length)];
      }
    }
  }

  return grid;
}

export function wordGridBackgroundImage(colorA: string, colorB: string): string {
  const grid = buildGrid();
  const cell = 34;
  const size = GRID_SIZE * cell;

  const chars: string[] = [];
  for (let r = 0; r < GRID_SIZE; r += 1) {
    for (let c = 0; c < GRID_SIZE; c += 1) {
      const x = c * cell + cell / 2;
      const y = r * cell + cell / 2;
      const fill = (r + c) % 5 === 0 ? colorB : colorA;
      chars.push(
        `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="monospace" font-size="20" font-weight="700" fill="${fill}">${grid[r][c]}</text>`
      );
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${chars.join(
    ""
  )}</svg>`;

  const encoded = encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");

  return `url("data:image/svg+xml,${encoded}")`;
}
