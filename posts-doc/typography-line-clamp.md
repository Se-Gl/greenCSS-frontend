---
isBlog: false
title: 'Line Clamp'
date: 'Nov 11. 2022'
excerpt: 'Utility classes for limiting of the contents of a block container.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Typography'
author: 'Severin Glaser'
keywords: 'Line Clamp, line break, line wrap'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step line-clamp number line-clamp-5 display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; 1 20 +1 line clamp the greencss line-clamp css property allows limiting of the contents of a block container to the specified number of lines javascript is not required to provide the desired maximum number of lines this feature is especially convenient for cards  active focus and hover states active focus and hover states are not available when using line-clamp darkmode darkmode classes are available just add the prefix `dark:` in front of the line-clamp class  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:line-clamp-1 md: 480px 768px md:line-clamp-2 lg: 768px 1080px lg:line-clamp-3 greencss media queries can also be combined with active focus and hover states for example use `sm:line-clamp-1` to apply the `line-clamp-1` utility at only small screen sizes at or below 480px or `active:md:line-clamp-2` to apply the `line-clamp-2` utility class only at medium screen sizes 480px 768px and on active state 1 the structure is as follows: ` conditional state : media query : number ` p e `active:md:line-clamp-5` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:line-clamp-1 focus:line-clamp-1 hover:line-clamp-1 active line clamp focus line clamp hover line clamp active:sm:line-clamp-1 focus:sm:line-clamp-1 hover:sm:line-clamp-1 active small screens line clamp focus small screens line clamp hover small screens line clamp active:md:line-clamp-1 focus:md:line-clamp-1 hover:md:line-clamp-1 active medium screens line clamp focus medium screens line clamp hover medium screens line clamp active:lg:line-clamp-1 focus:lg:line-clamp-1 hover:lg:line-clamp-1 active large screens line clamp focus large screens line clamp hover large screens line clamp sources -webkit-line-clamp https: developer mozilla org en-us docs web css -webkit-line-clamp '
---

| _greenCSS_          | CSS class example                                                                                              | minimum Value | maximum Value | Step |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | ------------- | ------------- | ---- |
| line-clamp-{number} | .line-clamp-5 { display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; } | 1             | 20            | +1   |

## Line Clamp

The greenCSS line-clamp CSS property allows limiting of the contents of a block container to the specified number of lines. JavaScript is not required to provide the desired maximum number of lines. This feature is especially convenient for cards.

```html
<p class="line-clamp-2">A very long text which gets cut after 2 lines</p>
```

## Active, focus, and hover states

Active, focus, and hover states are not available when using line-clamp.

## Darkmode

Darkmode classes are available. Just add the prefix `dark:` in front of the line-clamp class.

```html
<p class="dark:line-clamp-10 dark:sm:line-clamp-1 dark:md:line-clamp-2 dark:lg:line-clamp-5">
  A very long text which gets cut after in the darkmode
</p>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:line-clamp-1 |
| md:         | 480px - 768px  | .md:line-clamp-2 |
| lg:         | 768px - 1080px | .lg:line-clamp-3 |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:line-clamp-1` to apply the `line-clamp-1` utility at only small screen sizes at or below 480px. Or `active:md:line-clamp-2` to apply the `line-clamp-2` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure is as follows: `{conditional state}:{media query}:{number}` p.e. `active:md:line-clamp-5`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                                 | spoken example                                                                                      |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| active:line-clamp-1, focus:line-clamp-1, hover:line-clamp-1          | active line clamp, focus line clamp, hover line clamp                                               |
| active:sm:line-clamp-1, focus:sm:line-clamp-1, hover:sm:line-clamp-1 | active small screens line clamp, focus small screens line clamp, hover small screens line clamp,    |
| active:md:line-clamp-1, focus:md:line-clamp-1, hover:md:line-clamp-1 | active medium screens line clamp, focus medium screens line clamp, hover medium screens line clamp, |
| active:lg:line-clamp-1, focus:lg:line-clamp-1, hover:lg:line-clamp-1 | active large screens line clamp, focus large screens line clamp, hover large screens line clamp,    |

## Sources

- [-webkit-line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)
