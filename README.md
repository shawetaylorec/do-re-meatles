# Do Re Meatles

### ▶ [**Open the trainer**](https://shawetaylorec.github.io/do-re-meatles/) — shawetaylorec.github.io/do-re-meatles

A sight-singing trainer for learning to hear a melody in **solfège**. It shows a short
phrase from a song you already know, written out as music with the words underneath.
Then you flip the words for:

- **Do-re-mi**: the movable-do syllable for every note (do = the key note)
- **Intervals**: the jump from each note to the next (↑M3, ↓P4, …)
- **All**: lyrics, syllables and intervals stacked under each note

Press **Play** to hear it with the notes lighting up as they sound, the same
play-along as [Bach to Basics](https://shawetaylorec.github.io/bach-to-basics/).
Turn on **Do drone** to hold the key note underneath while it plays, a steady
reference for hearing each note as a scale degree. **Count-in** clicks you in, and
starts from the right beat when the phrase has an upbeat.

Because you already know these tunes by ear, connecting them to their syllables is
the quickest way into reading new music in solfège.

## How to practise

1. Look at the phrase in **Lyrics** view and hear it in your head.
2. Work out the do-re-mi, and sing it.
3. Switch to **Do-re-mi** (or press <kbd>2</kbd>) to check. Press **Play** to hear it.
4. Do the same for the intervals in **Intervals** view.

Keys: <kbd>space</kbd> play/stop · <kbd>1</kbd>–<kbd>4</kbd> views · <kbd>N</kbd>/<kbd>P</kbd>
next/previous · <kbd>K</kbd> key chord · <kbd>F</kbd> first note. Tap any note to hear it.

## Adding phrases

**Phrases → + Add a phrase.** Enter the notes in
[ABC notation](https://abcnotation.com/wiki/abc:standard:v2.1) (a cheat sheet is
built into the editor) and the lyrics, and a live preview shows exactly how the words,
syllables and intervals will line up. The status line tells you if the lyrics and notes
don't match up.

- The key signature is applied for you: in G major, write `F` and it sounds F♯.
- A short first bar is treated as an upbeat.
- Tied notes are skipped by the lyrics automatically.
- You can paste a whole ABC tune; its `K:`, `M:`, `L:` and `w:` lines are picked up.
- For now the app is built around **major keys without accidentals**. It does cope
  with both, though: chromatic notes get fi/te-style syllables, and a minor key
  (`K:Am`) is shown la-based.

Phrases you add live **only on your device**, in the browser's storage. Use
**Settings → Export my phrases** now and then to keep a backup, and **Import…** to
move them to another device.

## Songbook phrases (personal use)

The app also loads `data/private.js` if it exists. That file holds phrases transcribed
from a songbook I own, for my own practice. It is **gitignored and never published**,
so the live site only has the public-domain examples. To get the same phrases on a
phone, import the matching `*.private.json` export via **Settings → Import…**.

## Install it on your phone

It installs to the home screen and works offline, the same way as Bach to Basics:

- **iPhone**: open the link in **Safari**, tap Share, then **Add to Home Screen**.
- **Android**: Chrome offers **Install** (or use ⋮ → **Install app**).

## Development

No build step. Open `index.html`, or serve the folder with any static server.

- `tools/test.html`: open it (or run headless Chrome with `--dump-dom`) and it
  reports `ALL PASSED` or the failures. It covers the ABC parser, solfège, interval
  naming, lyric alignment, count-in and line breaking.
- `tools/phone.html?view=all&id=<phrase id>`: preview at phone width.
- `tools/stamp.sh`: run before committing a change to the app. It stamps the
  service worker with a content hash so installed copies pick up the update.
- `tools/make-icons.py`: regenerates `icons/` (needs Pillow).

## Credits

Notation by [abcjs](https://abcjs.net) (MIT). Built-in examples are public domain:
*Twinkle, Twinkle* (Jane Taylor, 1806), *Frère Jacques*, *Ode to Joy* (Beethoven,
words Henry van Dyke, 1907), *When the Saints*, *Amazing Grace* (John Newton, 1779).
