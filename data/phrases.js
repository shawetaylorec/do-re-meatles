// Do Re Meatles - built-in example phrases.
// Every one of these is in the public domain, words and music. Your own phrases are
// added in the app and live only on your device; they are never part of this file.
//
// Each phrase:
//   notes   the melody in ABC notation, unit length a quaver (L:1/8) unless an L: line
//           says otherwise. The key signature is applied for you, so write F, not ^F,
//           in G major.
//   lyrics  ABC lyric syntax: "-" splits syllables, "_" holds a syllable over an extra
//           note, "*" skips a note. Tied notes are skipped automatically.
window.DRM_BUILTIN = [
  {
    id: "pd-twinkle",
    title: "Twinkle, Twinkle, Little Star",
    by: "Traditional · words Jane Taylor, 1806",
    key: "C", meter: "4/4",
    notes: "C2 C2 G2 G2 | A2 A2 G4 | F2 F2 E2 E2 | D2 D2 C4 |]",
    lyrics: "Twin-kle twin-kle lit-tle star, how I won-der what you are"
  },
  {
    id: "pd-frere",
    title: "Frère Jacques",
    by: "Traditional",
    key: "G", meter: "4/4",
    notes: "G2 A2 B2 G2 | G2 A2 B2 G2 | B2 c2 d4 | B2 c2 d4 |]",
    lyrics: "Are you sleep-ing, are you sleep-ing, Bro-ther John? Bro-ther John?"
  },
  {
    id: "pd-ode",
    title: "Ode to Joy",
    by: "Beethoven, Symphony No. 9 · words Henry van Dyke, 1907",
    key: "D", meter: "4/4",
    notes: "F2 F2 G2 A2 | A2 G2 F2 E2 | D2 D2 E2 F2 | F3 E E4 |]",
    lyrics: "Joy-ful, joy-ful, we a-dore thee, God of glo-ry, Lord of love"
  },
  {
    id: "pd-saints",
    title: "When the Saints Go Marching In",
    by: "Traditional spiritual",
    key: "F", meter: "4/4",
    notes: "F2 A2 B2 | c8- | c2 F2 A2 B2 | c8 |]",
    lyrics: "Oh when the saints go march-ing in"
  },
  {
    id: "pd-grace",
    title: "Amazing Grace",
    by: "Traditional tune “New Britain” · words John Newton, 1779",
    key: "G", meter: "3/4",
    notes: "D2 | G4 (BG) | B4 A2 | G4 E2 | D4 D2 | G4 (BG) | B4 A2 | d6 |]",
    lyrics: "A-ma-zing_ grace, how sweet the sound that saved a_ wretch like me"
  }
];
