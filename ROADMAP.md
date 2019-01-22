# v3

## Realistic breakpoints

All these breakpoint classes are very inefficient.

In practice, very few of the breakpoint classes are actually used.

They probably also slow down the sass engine

A better solution also allows space for extra goodies:

## Missing common use-cases

### Extra classes for...

- Negative margins
- Common transitions
- Common transforms

### Common CSS states and pseudo-elements

- `:hover`
- `:active`
- `::before, ::after` (`attr`?)
