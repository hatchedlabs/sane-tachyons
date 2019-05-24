# Sane Tachyons

[![npm version](https://badge.fury.io/js/sane-tachyons.svg)](https://www.npmjs.com/package/sane-tachyons)

This is a fork of Tachyons. It is sane.

Therefore, it is called `sane-tachyons`.

It is small and mighty. The minified CSS file is just 9,267 bytes when gzipped.
For comparisons sake, the latest Bootstrap is 22,990 bytes, and does much less.

## Getting started

```bash
yarn add sane-tachyons # or `npm install sane-tachyons`
```

```scss
/* (optional) define project specific variables (see src/__variables.scss) */
$grid-columns: 12;

/* import sane-tachyons */
@import "~sane-tachyons/reset";
@import "~sane-tachyons/sane-tachyons";
```

## Motivation

Tachyons gives us:

- Abbreviated, composable, simple, predictable class names
- Massively reduced duplicate CSS
- Mobile first approach
- Reduced specificity issues
- A sensible power of 2 spacing scale `(..., 1rem, 2rem, 4rem, ...)`
- Everything in `rem`

Key changes are:

- written in SCSS, with plenty of variables
  - including maps and lists 🌈
- uses a custom reset rather than normalize
  - to encourage use of semantic (crawler/browser/human friendly) html elements
  - for example, `<h1>Text</h1>` looks the same as `<p>Text</p>` until classes
    such as `.h1` or `.normal` are added, but search engine can tell the first
    is a title, potentially improving SEO
- Just one breakpoint, `l_` for large (large is a variable and so can be
  changed, and by default is >480px to target non-phones)
- Adds a few utility classes that aren't included in tachyons
- Fixes some god-awful parts of tachyons, like its approach to flexbox
- Removes some strangely specific tachyons things, like colors and type scale,
  and replaces it with a more real-world setup
- Assumes only supporting sane browsers (with exception of IE11)

## Future stuff

Future probable changes are:

- Fonts as scss variables
- Toggle-able variable font support

---

## [Check out the docs!](docs)

---

(MIT Licence)
