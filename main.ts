import { mkdirSync, writeFileSync } from "node:fs";

// The joke: the restore tool did exactly what it was told — it picked the
// newest version of the file, and the newest version was the deletion.
// The machine followed its own rule straight into the ditch, and the turn
// lands in a single read: the rescuer is the one who finished the job.
const line =
  "I restored your file from backup, and restored the deletion instead — it had a newer timestamp.";

mkdirSync("/output", { recursive: true });
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${line.length}`);
}
writeFileSync("/output/entry.txt", line, "utf8");
