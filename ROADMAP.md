# v3

## Better css reset

Done: https://github.com/hatched-tom/sane-reset-css

## New breakpoint model

`{20, 25, 30, ..., 100}rem`

If `1rem` is `16px`, this means: `{320, 400, 480, ..., 1600}px`

Class names are in the form `.gt<rem>_<display-class>`.

`.gt20_db` means "when the viewport width is greater than 20rem, display block":

```css
/* This means if viewport width > 20rem */
/* Note: greater than BUT not equal to */
@media not (max-width: 20rem) {
  .gt20_db {
    display: block;
  }
}
```

This means we can create separate components for different sizes and turn them
on and off at different viewpoints by conditionally displaying the component's
root element.

## Spacing overhaul

## Remove v and h modifiers (by default)

Removed vertical (`v`) and horizontal (`h`) modifiers on padding and margin.

They are admittedly very useful but they use up a lot of space.

The same effect can be achieved by using two classes:

- `mr2 ml2` is the same as `mh2`
- `pt3 pb3` is the same as `pv3`

Try to follow the convention of top right bottom left, like the css short-hand.

### { 2^n } => { 2^n, 2^n * 1.5 }

Introduce half sizes. `mr2-5` (mr2.5) = halfway between mr2 and mr3.

Only available with padding and non-negative margins.

### Negative margins

Power of two scale.

Normal margins:

```scss
$spacing-base: .25rem;

/* normal margin */
.mt1 {
  margin-top: $spacing-base;
           /* .25rem = 4px */
}

/* negative margin */
.mt-1 {
  margin-top: -$spacing-base;
           /* -.25rem = -4px */
}
```

### Coordinates

Coordinates classes (`.top-1` => `top: 1rem`) were
too restrictive to be useful. They now follow the same pattern
as the power of two spacing scale. (`.t1` => `top: .25rem`)

## Common transitions

Did some research on these:

- [Scraped CSS transition data](research/properties/transitions.md)
- [Material recs](https://material.io/design/motion/speed.html#)

Unsurprisingly, devs don't care much for easing-functions and durations.

We will use Material's recommended durations and easing-functions.

We will also use the most common properties from the research.

## Common transforms

Did some research on these:

- [Scraped CSS transform data](research/properties/transforms.md)
- Mainly transform combos of {-100%, 0, 100%}
- Maybe scale too

## CSS show/hide children

- `.hide-kids` hides an element's children
- `.show-kids` shows an element's children

- `.hide-next` hides an element's adjacent element
- `.show-next` shows an element's adjacent element

- `.hide-last` hides an element's (last) child
- `.show-last` shows an element's (last) child

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
- `\.(hide|show)-(kids|wife|last)`

\* (some clever scss variable magic would improve this in future)

## Smaller changes

Typography files merged into one, `_typography.scss`. The order of the
typography classes should make more sense and allow for overriding. Note
that (text-)`color` is still separated from `typography`

Tables removed (with flexbox, there's always a better way)

`.sup`, `.sub`

`.absolute--fill` became `.absolute-fill`

text align from `.tc` to `.ta-c` to match vertical align

More z-index values (9, 99, 99999)

Aspect ratios to lowest forms. `.ratio-6x4` => `.ratio-3x2`
