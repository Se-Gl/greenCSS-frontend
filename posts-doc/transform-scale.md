---
isBlog: false
title: 'Transform Scale'
date: 'Apr 19. 2022'
excerpt: 'Utility classes for controlling the transform scale.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Transform'
author: 'Severin Glaser'
keywords: 'transform scale, '
classNames: ''
plainText: ' greencss css class example minimum value maximum value step scale number scale-105 transform: scale 1 05 ; 80 +130 +1 scale-x number scale-x-105 transform: scale 1 05 ; 80 +130 +1 scale-y number scale-y-105 transform: scale 1 05 ; 80 +130 +1 custom sizing variables control the transform scale on every html element by using the greencss classes shown above use the following structure to generate your transform scale `scale number ` ranging from 80 to 130 with a step of +1 p e `scale-105` this class acts like percentage scale-105 means that you will scale in your element by +5% 1 05 on the other hand scale-95 means that you will scale out your element by -5% 0 95 if you only want to scale your element in the horizontal direction use `scale-x number ` p e `scale-x-105` if you only want to scale your element in the vertical direction use `scale-y number ` p e `scale-y-1`  scale negative if you use negative values use `scale number ` below 100 p e `scale-90` this will scale out your element you can also apply negative classes up to 80 for horizontal scaling `scale-x number ` and vertical scaling elements `scale-y number ` active focus and hover states greencss css class example active:scale keyword active :scale-1:active transform: scale 0 1 ; focus:scale keyword focus :scale-1:focus transform: scale 0 1 ; hover:scale keyword hover :scale-1:focus transform: scale 0 1 ; greencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:scale-1` to only apply the scale-105 utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:scale-105 md: 480px 768px md:scale-105 lg: 768px 1080px lg:scale-105 greencss media queries can also be combined with active focus and hover states for example use `sm:scale-1` to apply the `scale-1` utility at only small screen sizes at or below 480px or `active:md:scale-1` to apply the `scale-1` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query :scale keyword ` p e `active:md:scale-1` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:scale-105 focus:scale-105 hover:scale-105 active scale focus scale hover scale active:sm:scale-105 focus:sm:scale-105 hover:sm:scale-105 active small screens scale focus small screens scale hover small screens scale active:md:scale-105 focus:md:scale-105 hover:md:scale-105 active medium screens scale focus medium screens scale hover medium screens scale active:lg:scale-105 focus:lg:scale-105 hover:lg:scale-105 active large screens scale focus large screens scale hover large screens scale sources scale https: developer mozilla org en-us docs web css scale '
---

| _greenCSS_       | CSS class example                        | minimum Value | maximum Value | Step |
| ---------------- | ---------------------------------------- | ------------- | ------------- | ---- |
| scale-{number}   | .scale-105 { transform: scale(1.05); }   | 80            | +130          | +1   |
| scale-x-{number} | .scale-x-105 { transform: scale(1.05); } | 80            | +130          | +1   |
| scale-y-{number} | .scale-y-105 { transform: scale(1.05); } | 80            | +130          | +1   |

## Custom Sizing Variables

Control the transform scale on every HTML element by using the greenCSS classes shown above. Use the following structure to generate your transform scale `scale-{number}` - ranging from 80 to 130 with a step of +1 p.e. `scale-105`. This class acts like percentage, scale-105 means, that you will scale in your element by +5% (1.05). On the other hand, scale-95 means that you will scale out your element by -5% (0.95). If you only want to scale your element in the horizontal direction, use `scale-x-{number}` p.e. `scale-x-105`. If you only want to scale your element in the vertical direction, use `scale-y-{number}` p.e. `scale-y-1`.

```html
<div class="scale-1">{children}</div>
<div class="scale-x-1">{children}</div>
<div class="scale-y-1">{children}</div>
```

### Scale Negative

If you use negative values, use `scale-{number}` below 100. p.e.`scale-90`. This will scale out your element. You can also apply "negative" classes up to 80 for horizontal scaling `scale-x-{number}` and vertical scaling elements `scale-y-{number}`.

## Active, focus, and hover states

| _greenCSS_             | CSS class example                                  |
| ---------------------- | -------------------------------------------------- |
| active:scale-{keyword} | .active\:scale-1:active { transform: scale(0.1); } |
| focus:scale-{keyword}  | .focus\:scale-1:focus { transform: scale(0.1); }   |
| hover:scale-{keyword}  | .hover\:scale-1:focus { transform: scale(0.1); }   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:scale-1` to only apply the scale-105 utility class on hover.

```html
<div class="scale-105 hover:scale-10">{children}</div>
<div class="scale-x-105 hover:scale-x-10">{children}</div>
<div class="scale-y-105 hover:scale-y-10">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:scale-105    |
| md:         | 480px - 768px  | .md:scale-105    |
| lg:         | 768px - 1080px | .lg:scale-105    |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:scale-1` to apply the `scale-1` utility at only small screen sizes at or below 480px. Or `active:md:scale-1` to apply the `scale-1` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:scale-{keyword}` p.e. `active:md:scale-1`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                          | spoken example                                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| active:scale-105 , focus:scale-105 , hover:scale-105          | active scale, focus scale, hover scale                                               |
| active:sm:scale-105 , focus:sm:scale-105 , hover:sm:scale-105 | active small screens scale, focus small screens scale, hover small screens scale,    |
| active:md:scale-105 , focus:md:scale-105 , hover:md:scale-105 | active medium screens scale, focus medium screens scale, hover medium screens scale, |
| active:lg:scale-105 , focus:lg:scale-105 , hover:lg:scale-105 | active large screens scale, focus large screens scale, hover large screens scale,    |

## Sources

- [scale](https://developer.mozilla.org/en-US/docs/Web/CSS/scale)
