# Fonts

This directory contains all work with typography. Normalization, variables, classes creation, etc.

## How to use

It's recommended to use utility classes `.font-*` instead of using font properties in components. If you can't use an utility class, use a css variable `var(--font-*)`. If you don't see the font variable you need, add it to the variable collection or ask the designer what to do. It's allowed to change properties such as `letter-spacing` on the component level.

## Examples

```
<Heading class="font-h1">Hello World</Heading>
<Text :class="[someVariable, 'font-base']">Lorem ipsum dolor sit amet...</Text>
```

## TODO

- Remove unused fonts (different character ranges);
- Move fonts from /public directory to the directory with the font index.scss. E.g. `/src/app/themes/fonts/roboto`;
- Create sass mixins to optimize variables creation;
- Combine font files into one for one font.
