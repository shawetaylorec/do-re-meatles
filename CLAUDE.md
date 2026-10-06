# Do Re Meatles: notes for working on this repo

- **Never commit `data/private.js` or any `*.private.json`.** They hold phrases
  transcribed from a songbook the owner purchased, for personal use only. Both are
  gitignored. Check `git status` before every commit. The public site must only ever
  carry the public-domain examples in `data/phrases.js`.
- Static single page (`index.html`), no build step. Same structure and PWA scheme as
  the sibling repo `../bach-to-basics`.
- Before committing an app change, run `bash tools/stamp.sh` (service-worker cache
  version) and `tools/test.html` in headless Chrome. It must print `ALL PASSED`:
  `chrome --headless=new --allow-file-access-from-files --virtual-time-budget=5000 --dump-dom file:///.../tools/test.html`
- Phone-width screenshots: `tools/phone.html?view=all&id=<phrase id>` in a 422px
  window (headless Chrome on Windows won't go narrower than ~500px).
- Transcribing from the songbook (`~/Downloads/Do Re Meatles.pdf`): it's scanned
  images, so read by eye. Deskew each page first and measure the pitch of any doubtful
  notehead against the staff lines. The melody is the top note of the treble staff.
  The current scope is major-key phrases with no accidentals.
