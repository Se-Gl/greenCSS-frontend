---
isBlog: false
title: 'Flex Basis'
date: 'Mar 28. 2022'
excerpt: 'Utility classes for controlling an element`s flex basis.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Flex & Grid'
author: 'Severin Glaser'
keywords: 'flex basis, flex, grid'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step - - - - basis- size per basis-1per flex-basis: 1%; basis-0per basis-100per 1% how to work with flex basis use the basis- size per utilities to set the initial size of flex items ! omencss flex-basis images docs flex flex-basis webp?style=centerme html div class=flex flex-row h-50px div class=basis-20per bg-purple first: 20% div div class=basis-20per bg-purple-3 second: 20% div div class=basis-60per bg-purple-6 third: 40% div div active focus and hover states omencss css class example range - active:basis- size per active :basis- size per:active flex-basis: 1%; active:basis-0per to active:basis-100per focus:basis- size per focus :basis- size per:focus flex-basis: 1%; focus:basis-0per to focus:basis-100per hover:basis- size per hover :basis- size per:hover flex-basis: 1%; hover:basis-0per to hover:basis-100per omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:basis-10per to only apply the basis-10per utility on hover ! omencss flex-basis hover images docs flex flex-basis-hover webp?style=centerme html div class=flex flex-row h-50px div class=basis-20per hover:basis-30per bg-purple div class=basis-20per hover:basis-30per bg-purple-3 second: 20% div div class=basis-60per hover:basis-40per bg-purple-6 third: 40% div div div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:basis-10per md: 480px - 768px md:basis-10per lg: 768px - 1080px lg:basis-10per omencss media queries can also be combined with active focus and hover states for example use sm:basis-10per to apply the basis-10per utility at only small screen sizes at or below 480px or active:md:basis-10per to apply the basis-10per utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: conditional state : media query :basis- size per p e active:md:basis-50per executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example - active:basis- size per focus:basis- size per hover:basis- size per active basis focus basis hover basis active:sm:basis- size per focus:sm:basis- size per hover:sm:basis- size per active small screens basis focus small screens basis hover small screens basis active:md:basis- size per focus:md:basis- size per hover:md:basis- size per active medium screens basis focus medium screens basis hover medium screens basis active:lg:basis- size per focus:lg:basis- size per hover:lg:basis- size per active large screens basis focus large screens basis hover large screens basis '
---

| _omenCSS_       | CSS class example               | minimum Value | maximum Value | Step |
| --------------- | ------------------------------- | ------------- | ------------- | ---- |
| basis-{size}per | .basis-1per { flex-basis: 1%; } | basis-0per    | basis-100per  | 1%   |

## How to work with flex basis

Use the `basis-{size}per` utilities to set the initial size of flex items.

![omencss flex-basis](/images/docs/flex/flex-basis.webp?style=centerme)

```html
<div class="flex flex-row h-50px">
  <div class="basis-20per bg-purple">first: 20%</div>
  <div class="basis-20per bg-purple-3">second: 20%</div>
  <div class="basis-60per bg-purple-6">third: 40%</div>
</div>
```

## Active, focus, and hover states

| _omenCSS_              | CSS class example                                   | Range                                    |
| ---------------------- | --------------------------------------------------- | ---------------------------------------- |
| active:basis-{size}per | .active\:basis-{size}per:active { flex-basis: 1%; } | active:basis-0per to active:basis-100per |
| focus:basis-{size}per  | .focus\:basis-{size}per:focus { flex-basis: 1%; }   | focus:basis-0per to focus:basis-100per   |
| hover:basis-{size}per  | .hover\:basis-{size}per:hover { flex-basis: 1%; }   | hover:basis-0per to hover:basis-100per   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:basis-10per` to only apply the basis-10per utility on hover.

![omencss flex-basis hover](/images/docs/flex/flex-basis-hover.webp?style=centerme)

```html
<div class="flex flex-row h-50px">
  <div class="basis-20per hover:basis-30per bg-purple">first hover: 30%</div>
  <div class="basis-20per hover:basis-30per bg-purple-3">second hover: 30%</div>
  <div class="basis-60per hover:basis-40per bg-purple-6">third hover: 40%</div>
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:basis-10per |
| md:         | 480px - 768px  | .md:basis-10per |
| lg:         | 768px - 1080px | .lg:basis-10per |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:basis-10per` to apply the basis-10per utility at only small screen sizes at or below 480px. Or `active:md:basis-10per` to apply the basis-10per utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditional state}:{media query}:basis-{size}per` p.e. `active:md:basis-50per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                             | spoken example                                                                       |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| active:basis-{size}per , focus:basis-{size}per , hover:basis-{size}per          | active basis, focus basis, hover basis                                               |
| active:sm:basis-{size}per , focus:sm:basis-{size}per , hover:sm:basis-{size}per | active small screens basis, focus small screens basis, hover small screens basis,    |
| active:md:basis-{size}per , focus:md:basis-{size}per , hover:md:basis-{size}per | active medium screens basis, focus medium screens basis, hover medium screens basis, |
| active:lg:basis-{size}per , focus:lg:basis-{size}per , hover:lg:basis-{size}per | active large screens basis, focus large screens basis, hover large screens basis,    |