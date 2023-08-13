# Animations

This directory contains all work with animations. Normalization, variables, classes creation, etc.

## How to use

Animations are separated into two categories: vue animations (`v-*`) and others. A vue animation is an animation that uses a `<Transition>` component. Animation classes should start with `.animation-*` or `.animation-v-*` for vue animations.

## Examples

```
<Heading class="animation-shake">Hello World</Heading>

<transition name="animation-v-fade">
	<Text>Lorem ipsum dolor sit amet...</Text>
</transition>
```
