---
isBlog: false
title: 'Align Content'
date: 'Apr 06. 2022'
excerpt: 'Utility classes to control the item alignment along the vertical axis.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flexbox'
author: 'Severin Glaser'
keywords: 'Align Content, flexbox, align-content, center items'
classNames: ''
plainText: ' greenCSS css class example content-center content-center align-content: center; content-start content-start align-content: flex-start; content-end content-end align-content: flex-end; content-between content-between align-content: space-between; content-around content-around align-content: space-around; content-evenly content-evenly align-content: space-evenly; how to work with justify use the `content keyword ` utilities to set where rows are positioned content-start in the example below we use `content-start` to position the elements at the beginning of a flex environment ! greenCSS align-content-start images docs flex align-content-start webp?style=centerme  content center in the example below we use `content-center` to position the elements in the middle of the vertical axis ! greenCSS content-center images docs flex align-content-center webp?style=centerme  content end in the example below we use `content-end` to position the elements at the end of the vertical axis ! greenCSS content-end images docs flex align-content-end webp?style=centerme  content between in the example below we use `content-between` to position the elements along the vertical axis with an even space between each element ! greenCSS content-between images docs flex align-content-between webp?style=centerme  content around in the example below we use `content-around` to position the elements along the horizontal axis with an even space between each element and side ! greenCSS content-around images docs flex align-content-around webp?style=centerme  content evenly in the example below we use `content-evenly` to position the elements along the vertical axis with an equal space between each element and the corners ! greenCSS content-evenly images docs flex align-content-evenly webp?style=centerme  active focus and hover states greenCSS css class example active:content keyword active :content-start:active align-content: flex-start; focus:content keyword focus :content-start:focus align-content: flex-start; hover:content keyword hover :content-start:hover align-content: flex-start; greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:content-start` to only apply the content-start utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:content-center md: 480px 768px md:content-center lg: 768px 1080px lg:content-center greenCSS media queries can also be combined with active focus and hover states for example use `sm:content-center` to apply the content-center utility at only small screen sizes at or below 480px or `active:md:content-center` to apply the content-center utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` conditional state : media query :content keyword ` p e `active:md:content-center` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:content keyword focus:content keyword hover:content keyword active align content center focus align content center hover align content center active:sm:content keyword focus:sm:content keyword hover:sm:content keyword active small screens align content center focus small screens align content center hover small screens align content center active:md:content keyword focus:md:content keyword hover:md:content keyword active medium screens align content center focus medium screens align content center hover medium screens align content center active:lg:content keyword focus:lg:content keyword hover:lg:content keyword active large screens align content center focus large screens align content center hover large screens align content center sources align-content https: developer mozilla org en-us docs web css align-content '
---

| _greenCSS_      | CSS class example                                  |
| --------------- | -------------------------------------------------- |
| content-center  | .content-center { align-content: center; }         |
| content-start   | .content-start { align-content: flex-start; }      |
| content-end     | .content-end { align-content: flex-end; }          |
| content-between | .content-between { align-content: space-between; } |
| content-around  | .content-around { align-content: space-around; }   |
| content-evenly  | .content-evenly { align-content: space-evenly; }   |

## How to work with justify

Use the `content-{keyword}` utilities to set where rows are positioned.

### Content-start

In the example below, we use `content-start` to position the elements at the beginning of a flex environment.

![greenCSS align-content-start {900x400} ](/images/docs/flex/align-content-start.webp)

```html
<div class="grid grid-col-2 content-start min-h-50vh gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Content center

In the example below, we use `content-center` to position the elements in the middle of the vertical axis.

![greenCSS content-center {900x400} ](/images/docs/flex/align-content-center.webp)

```html
<div class="flex content-center gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Content end

In the example below, we use `content-end` to position the elements at the end of the vertical axis.

![greenCSS content-end {900x400} ](/images/docs/flex/align-content-end.webp)

```html
<div class="flex content-end gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Content between

In the example below, we use `content-between` to position the elements along the vertical axis with an even space between each element.

![greenCSS content-between {900x400} ](/images/docs/flex/align-content-between.webp)

```html
<div class="flex content-between gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Content around

In the example below, we use `content-around` to position the elements along the horizontal axis with an even space between each element and side.

![greenCSS content-around {900x400} ](/images/docs/flex/align-content-around.webp)

```html
<div class="flex content-around gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

### Content evenly

In the example below, we use `content-evenly` to position the elements along the vertical axis with an equal space between each element and the corners.

![greenCSS content-evenly {900x400} ](/images/docs/flex/align-content-evenly.webp)

```html
<div class="flex content-evenly gap-20px">
  <div class="bg-purple">first</div>
  <div class="bg-purple-3">second</div>
  <div class="bg-purple-6">third</div>
</div>
```

## Active, focus, and hover states

| _greenCSS_               | CSS class example                                           |
| ------------------------ | ----------------------------------------------------------- |
| active:content-{keyword} | .active\:content-start:active {align-content: flex-start; } |
| focus:content-{keyword}  | .focus\:content-start:focus { align-content: flex-start; }  |
| hover:content-{keyword}  | .hover\:content-start:hover { align-content: flex-start; }  |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:content-start` to only apply the content-start utility class on hover.

```html
<div class="flex content-end hover:content-center">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example   |
| ----------- | -------------- | ------------------ |
| sm:         | 0px - 480px    | .sm:content-center |
| md:         | 480px - 768px  | .md:content-center |
| lg:         | 768px - 1080px | .lg:content-center |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:content-center` to apply the content-center utility at only small screen sizes at or below 480px. Or `active:md:content-center` to apply the content-center utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:content-{keyword}` p.e. `active:md:content-center`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                                  | spoken example                                                                                                                    |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| active:content-{keyword} , focus:content-{keyword} , hover:content-{keyword}          | active align content center, focus align content center, hover align content center                                               |
| active:sm:content-{keyword} , focus:sm:content-{keyword} , hover:sm:content-{keyword} | active small screens align content center, focus small screens align content center, hover small screens align content center,    |
| active:md:content-{keyword} , focus:md:content-{keyword} , hover:md:content-{keyword} | active medium screens align content center, focus medium screens align content center, hover medium screens align content center, |
| active:lg:content-{keyword} , focus:lg:content-{keyword} , hover:lg:content-{keyword} | active large screens align content center, focus large screens align content center, hover large screens align content center,    |

## Sources

- [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
