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

## CSS show/hide children

Excellent for when you have ugly child nodes and you don't want ~~custody~~
to see them sometimes.

- `.hide-kids` hides an element's children
- `.show-kids` shows an element's children

- `.hide-last` hides (last) child
- `.show-last` shows (last) child

## CSS states

Tachyons chose some weird ones for this:

- `.dim` => (on hover) `opacity: .5`
- `.hide-child` => (on hover) shows children
- `.grow` => (on hover) `transform: scale(1.05)`

Let's use the classes we already know, with simple modifiers:

- `.hover_<class>`
- `.active_<class>`
- `.focus_<class>`

Adding this to every class would be wasteful, so let's restrict it to the
classes we have for:

- `opacity`
- `display`
- `overflow`
- `background-color`\*
- `color`\*
- `transform`
- `font-weight`
- `text-decoration`
- `border-width`
- `\.(hide|show)-(kids|last)`

\* (some clever scss variable magic would improve this in future)
