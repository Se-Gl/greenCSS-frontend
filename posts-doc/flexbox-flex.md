---
isBlog: false
title: 'Flex'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s flex properties.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'Flex, flexbox'
classNames: ''
plainText: ' greenCSS css class example flex-none flex-none flex: none; flex-1 flex-1 flex: 1; flex-2 flex-2 flex: 2; flex-initial flex-initial flex: initial; flex-auto flex-auto flex: auto; how to work with flex values use the utility classes above to access your desired class flex none use `flex-none` to prevent flex elements from growing or shrinking the first div element has no flex value and only fits its size ! greenCSS flex-1 images docs flex flex-1 webp?style=centerme  flex 1 use `flex-1` to allow a flex item to grow and shrink as needed this will ignore the initial width the second and third div element have a flex-1 value ! greenCSS flex-1 images docs flex flex-1 webp?style=centerme  flex 2 use `flex-1` to allow a flex item to grow and shrink as needed this will ignore the initial width the third div element has a flex-2 value and is twice as wide as the second div ! greenCSS flex-1 images docs flex flex-2 webp?style=centerme  flex initial use `flex-initial` to allow a flex item to shrink but do not allow it to grow in regard to its initial size the third div element has a flex-initial class with a width of 250px the second div has a width of 500px and the first element has no width set at all ! greenCSS flex-initial images docs flex flex-initial webp?style=centerme  flex auto use `flex-auto` to allow a flex item to grow and shrink in regard to its initial size the third div element has a flex-auto class with a width of 250px the second div has a width of 500px and the first element has no width set at all ! greenCSS flex-auto images docs flex flex-auto webp?style=centerme  active focus and hover states greenCSS css class example active:flex-none active :flex-none:active flex-none: row; focus:flex-none focus :flex-none:focus flex-none: row; hover:flex-none hover :flex-none:hover flex-none: row; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:flex-none` to only apply the flex-none utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:flex-none md: 480px 768px md:flex-none lg: 768px 1080px lg:flex-none greenCSS media queries can also be combined with active focus and hover states for example use `sm:flex-none` to apply the flex-none utility at only small screen sizes at or below 480px or `active:md:flex-none` to apply the flex-none utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query : flex-none-class ` p e `active:md:flex-none` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:flex-none focus:flex-none hover:flex-none active flex none focus flex none hover flex none active:sm:flex-none focus:sm:flex-none hover:sm:flex-none active small screens flex none focus small screens flex none hover small screens flex none active:md:flex-none focus:md:flex-none hover:md:flex-none active medium screens flex none focus medium screens flex none hover medium screens flex none active:lg:flex-none focus:lg:flex-none hover:lg:flex-none active large screens flex none focus large screens flex none hover large screens flex none sources flexbox https: developer mozilla org en-us docs learn css css layout flexbox '
---

| _greenCSS_   | CSS class example                |
| ------------ | -------------------------------- |
| flex-none    | .flex-none { flex: none; }       |
| flex-1       | .flex-1 { flex: 1; }             |
| flex-2       | .flex-2 { flex: 2; }             |
| flex-initial | .flex-initial { flex: initial; } |
| flex-auto    | .flex-auto { flex: auto; }       |

## How to work with flex values

Use the utility classes above to access your desired class.

### Flex none

Use `flex-none` to prevent flex elements from growing or shrinking. (The first div element has no flex value and only fits its size).

![greenCSS responsive {800x480} ](/images/docs/flex/flex-1.webp)

```html
<div class="flex">
  <div class="flex-none bg-purple">first</div>
  <div class="flex-1 w-50rem bg-purple-3">second</div>
  <div class="flex-2 w-25rem bg-purple-6">third</div>
</div>
```

### Flex 1

Use `flex-1` to allow a flex item to grow and shrink as needed, this will ignore the initial width. (The second and third div element have a flex-1 value).
![greenCSS responsive {800x480} ](/images/docs/flex/flex-1.webp)

```html
<div class="flex">
  <div class="flex-none bg-purple">first</div>
  <div class="flex-1 w-50rem bg-purple-3">second</div>
  <div class="flex-1 w-25rem bg-purple-6">third</div>
</div>
```

### Flex 2

Use `flex-1` to allow a flex item to grow and shrink as needed, this will ignore the initial width. (The third div element has a flex-2 value and is twice as wide as the second div).
![greenCSS responsive {800x480} ](/images/docs/flex/flex-2.webp)

```html
<div class="flex">
  <div class="flex-none bg-purple">first</div>
  <div class="flex-1 w-50rem bg-purple-3">second</div>
  <div class="flex-2 w-25rem bg-purple-6">third</div>
</div>
```

### Flex initial

Use `flex-initial` to allow a flex item to shrink, but do not allow it to grow - in regard to its initial size. (The third div element has a flex-initial class with a width of 250px, the second div has a width of 500px and the first element has no width set at all).
![greenCSS initial {800x480} ](/images/docs/flex/flex-initial.webp)

```html
<div class="flex">
  <div class="flex-none bg-purple">first</div>
  <div class="flex-initial w-50rem bg-purple-3">second</div>
  <div class="flex-initial w-25rem bg-purple-6">third</div>
</div>
```

### Flex auto

Use `flex-auto` to allow a flex item to grow and shrink - in regard to its initial size. (The third div element has a flex-auto class with a width of 250px, the second div has a width of 500px and the first element has no width set at all).
![greenCSS auto responsive {800x480} ](/images/docs/flex/flex-auto.webp)

```html
<div class="flex">
  <div class="flex-none bg-purple">first</div>
  <div class="flex-auto w-50rem bg-purple-3">second</div>
  <div class="flex-auto w-25rem bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_       | CSS class example                             |
| ---------------- | --------------------------------------------- |
| active:flex-none | .active\:flex-none:active { flex-none: row; } |
| focus:flex-none  | .focus\:flex-none:focus { flex-none: row; }   |
| hover:flex-none  | .hover\:flex-none:hover { flex-none: row; }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:flex-none` to only apply the flex-none utility on hover.

```html
<div class="flex">
  <div class="flex-none hover:flex-1 bg-purple">first</div>
  <div class="flex-1 hover:flex-none w-50rem bg-purple-3">second</div>
  <div class="flex-1 hover:flex-none w-25rem bg-purple-6">third</div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:flex-none    |
| md:         | 480px - 768px  | .md:flex-none    |
| lg:         | 768px - 1080px | .lg:flex-none    |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:flex-none` to apply the flex-none utility at only small screen sizes at or below 480px. Or `active:md:flex-none` to apply the flex-none utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:{flex-none-class}` p.e. `active:md:flex-none`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                          | spoken example                                                                                  |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| active:flex-none , focus:flex-none , hover:flex-none          | active flex none, focus flex none, hover flex none                                              |
| active:sm:flex-none , focus:sm:flex-none , hover:sm:flex-none | active small screens flex none, focus small screens flex none, hover small screens flex none    |
| active:md:flex-none , focus:md:flex-none , hover:md:flex-none | active medium screens flex none, focus medium screens flex none, hover medium screens flex none |
| active:lg:flex-none , focus:lg:flex-none , hover:lg:flex-none | active large screens flex none, focus large screens flex none, hover large screens flex none    |

## Sources

- [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
