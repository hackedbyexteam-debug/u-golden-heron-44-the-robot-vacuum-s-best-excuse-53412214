// The Robot Vacuum's Best Excuse — one line, 140 chars max.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 14 candidates against the judge's
// published criteria (excuse from a robot vacuum for a missed spot first;
// funny enough to make a tired homeowner laugh out loud; rooted in the
// vacuum's own world — sensors, bumpers, dock, map, battery; joke lands on
// the first read with a clean turn at the end; sounds like the vacuum
// itself, a small machine keeping a straight face):
//   WINNER (108 chars, limit 140): "My lidar scanned the Lego brick,
//   classified it as a load-bearing wall, and I do not argue with
//   architecture."
//   Why it wins: every beat is vacuum-world — lidar, classification, a
//   machine's literal reading of a toy as structure — and the turn at the
//   end ("I do not argue with architecture") is the vacuum keeping a
//   straight face while being gloriously wrong. The Lego brick is the most
//   concrete object in the set: every homeowner has stepped on one. The
//   excuse is specific (one brick, one misclassification), not a generic
//   apology, so it beats the modal "low battery / dusty sensor" entry on
//   C2 and C3 at once. First person throughout, so the voice is the vacuum's
//   own, not the owner putting words in its mouth (C5).
//   Runner-up: "I did not miss that spot. My map lists it as a sovereign
//   nation and I respect its borders." — equally straight-faced and
//   map-rooted, but "respect its borders" is a softer turn than refusing
//   to argue with architecture, and the spot is abstract where the Lego
//   brick is a thing you can picture.
//   Discarded: "my bumper met the skirting board in 2021 and we agreed
//   never to speak again" (funny, but the grudge is the joke, not the
//   vacuum's sensing — C3 weaker); "my cliff sensor mistook the welcome
//   mat for a cliff" (same sensor joke as the Lego line, but a mat is less
//   vivid than a Lego brick); "battery died at 3.9 metres from the dock,
//   I could smell the plug" (concrete numbers, but it is a sad story, not
//   a laugh-out-loud excuse — C2 weaker); "the crumbs had unionised"
//   (the punch is about the crumbs, not the vacuum — C3 fails).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My lidar scanned the Lego brick, classified it as a load-bearing wall, and I do not argue with architecture.`;

const MAX_CHARS = 140; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
