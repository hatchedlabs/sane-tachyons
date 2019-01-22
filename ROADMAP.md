# v3

## Better css reset

inspired by `unset: all`

needs some basic stuff for ie

## New breakpoint model

`{20, 25, 30, ..., 100}rem`

class names in the form `.gt<rem>_<display-class>`

`.gt20_db` means:

```css
/* This means if viewport width > 20rem */
/* Note: greater than BUT not equal to */
@media not (max-width: 20rem) {
  .gt20_db {
    display: block;
  }
}
```

## Negative margins

Power of two scale.

Normal margins:

```scss
$spacing-base: .25rem;

.mt3 {
  margin-top: 2 * 2 * $spacing-base; /* 2 * 2 * .25rem = 1rem = 16px */
}
```

Negative margins:

```scss
$spacing-base: .25rem;

.mt-3 {
  margin-top: -1 * 2 * 2 * $spacing-base; /* -1 * 2 * 2 * .25rem = -1rem = -16px */
}
```

## Common transitions

Did some research on these:

- [Scraped CSS transition data](link)
- [Material recs](https://material.io/design/motion/speed.html#)

Unsurprisingly, devs don't care much for easing-functions and durations.

We will use Material's recommended durations and easing-functions.

We will also use the most common properties from the research.

## Common transforms

Did some research on these:

- [Scraped CSS transform data](link)

- Mainly transform combos of {-100%, 0, 100%}
- Maybe scale too

### Common CSS states and pseudo-elements

Tachyons chose some weird ones for this.

Probably best I do some research for common patterns.

For now, common hover, focus, active states go in here.

Maybe a show-children class as per latest tachyons?

Maybe overlays as per before and after?

TBA
