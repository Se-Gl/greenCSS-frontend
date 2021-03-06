---
isBlog: false
title: 'Container & Row'
date: 'Apr 06. 2022'
excerpt: 'Container and Row classes to control html elements.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Layout'
author: 'Severin Glaser'
keywords: 'Container, Row, layout'
classNames: ''
plainText: ' greencss css class example container container width: 100%; max-width: 1100px; margin: 0 auto; padding: 0; box-sizing: border-box; row row display: flex; flex-flow: row wrap; how to use the container use the `container` or `row` utilities to set the individual width of your layout the container is useful for screens with a width up to 1100px it is recommended to use the container with the `mx-auto` class to center it for larger screens check row row for an example container in the example below we use `container` to set the a default layout the container css class looks like:  a real life example could look like:  row in the example below we use `row` to set a row within a container the row css class looks like:  a real life example could look like:  the container in this example has a blue background we use `mx-auto` to center the container horizontally the row elements are marked with first second and third ! white space iphone 1875x1050 caption: laptop with container row images docs layout macbook-layout-container-row webp ! white space iphone 426x857 caption: smartphone with container row images docs layout iphone-layout-container-row webp active focus and hover states there are no active focus or hover classes available responsive breakpoints there are no responsive classes available executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example container container row row '
---

| _greenCSS_ | CSS class example                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------- |
| container  | .container { width: 100%; max-width: 1100px; margin: 0 auto; padding: 0; box-sizing: border-box; } |
| row        | .row { display: flex; flex-flow: row wrap; }                                                       |

## How to use the container

Use the `container` or `row` utilities to set the individual width of your layout. The container is useful for screens with a width up to 1100px. It is recommended to use the container with the `mx-auto` class to center it for larger screens. Check [row](#row) for an example.

### Container

In the example below, we use `container` to set the a default layout.

The container CSS class looks like:

```css
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
```

A real life example could look like:

```html
<div class="container mx-auto">{children}</div>
```

### Row

In the example below, we use `row` to set a row within a container.

The row CSS class looks like:

```css
.row {
  display: flex;
  flex-flow: row wrap;
}
```

A real life example could look like:

```html
<div class="container flex mx-auto">
  <div class="row w-100per">
    <div class="w-100per bg-purple">first</div>
  </div>
  <div class="row w-100per">
    <div class="w-100per bg-purple-3">second</div>
  </div>
  <div class="row w-100per">
    <div class="w-100per bg-purple-6">second</div>
  </div>
</div>
```

The container in this example has a blue background, we use `mx-auto` to center the container horizontally. The row elements are marked with "first", "second" and "third".

![white space iphone {1875x1050} {caption: Laptop with container row}](/images/docs/layout/MacBook-layout-container-row.webp)

![white space iphone {426x857} {caption: Smartphone with container row}](/images/docs/layout/iphone-layout-container-row.webp)

## Active, focus, and hover states

There are no active, focus or hover classes available.

## Responsive Breakpoints

There are no responsive classes available.

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names | spoken example |
| -------------------- | -------------- |
| container            | container      |
| row                  | row            |
