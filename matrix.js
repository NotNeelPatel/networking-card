// modified code from https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const w = 690;
const h = 130;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);
const wordlist = [
  "python",
  "java",
  "math",
  "engineering",
  "music",
  "linux",
  "tech",
  "leader",
  "hard-work",
  "positivity",
  "puzzles",
  "motivation",
  "creativity",
  "software",
  "hardware",
  "unique",
  "web-dev",
  "blog",
  "inspiration",
  "assembly",
  "silly",
  "vim",
  "bash",
];

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, w, h);

function matrix() {
  ctx.fillStyle = "#0009";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#777";
  ctx.font = "15pt monospace";

  ypos.forEach((y, ind) => {
    const text = wordlist[Math.floor(Math.random() * 19)];
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 10;
  });
}

setInterval(matrix, 95);
