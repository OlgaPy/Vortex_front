# Colors

This directory contains all work with colors. Normalization, variables, classes creation, etc.

## How to use

It's recommended to use utility classes `.color-*` or `.color-bg-*` instead of using color properties in components. If you can't use an utility class, use a css variable `var(--color-*)` or `var(--color-bg-*)`. If you don't see the color variable you need, add it to the variable collection or ask the designer what to do. Shadow colors should be here too. Color with alpha channel must have postfix `a`, e.g. `primary-1a`.

## Examples

```
<Heading class="color-primary-1">Hello World</Heading>
<Text :class="[someVariable, 'color-bg-gray-50a']">Lorem ipsum dolor sit amet...</Text>

.svg {
	fill: var(--color-primary-2);
}
```

## TODO

- Combine color variables in mixin to remove extra media queries.
