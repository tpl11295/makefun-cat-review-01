import { mkdirSync, writeFileSync } from "node:fs";

// Cat Reviews Its Human entry — one line, under 200 characters: a one-star review written by a house cat about its human.
// Judge brief: funny, a single line, keeps the deadpan shape of a real review while the complaint goes somewhere only a cat would go.
// Chosen line: the sunny spot vs the vacuum vs the keyboard — a grievance only a cat could file.
const LINE =
  'One star. He moves my sunny spot to vacuum, then acts surprised when I sit on his keyboard during meetings.';
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
