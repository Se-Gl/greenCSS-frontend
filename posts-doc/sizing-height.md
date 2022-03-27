---
isBlog: false
title: 'Height'
date: 'Mar 27. 2022'
excerpt: 'Utility classes for controlling an element`s height.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Sizing'
author: 'Severin Glaser'
keywords: 'sizing, height, h-, max-h, min-h'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step - - - h- size h-1px height: 1px; h-0px h-100px 1px h- size h-11rem height: 1rem; h-11rem h-100rem 1rem h- size h-1% height: 1%; h-0per h-100per 1% h- size h-1vw height: 1vw; h-0vw h-100vw 1vw fixed heights control the height on every html element by using the h- size utility with a postfix variable - like -px -rem -vw 1 the pixel height class range is from 0 to positive 100 and uses the px postfix the steps are + - 1px e g h-0px h-1px h-100px 2 the rem height class range is from positive 11rem to positive 100rem and uses the rem postfix the steps are + - 1rem e g h-11rem h-12rem h-100rem ⚠️ remember 1rem = 10px or 10rem = 100px 3 the viewport height class range is from 0vw to positive 100vw and uses the vw postfix the steps are + - 1vw e g h-0vw h-1vw h-100vw use h-100vw to make an element span the entire height of the viewport html div class=h-50px h-50px div ! 50rem is equal to: 500px div class=h-50rem h-50rem div ! 50per is equal to: 50% div class=h-50per h-50per div ! 50vw is equal to: viewport height of 50 div class=h-50vw h-50vw div percentage heights control the percentage height on every html element by using the h- size utility with the postfix variable -per 1 the percentage height class range is from 0 to positive 100 and uses the per postfix the steps are + - 1% e g h-0per h-1per h-100per html div class=h-50per h-50per div reset height the h-auto utility can be useful if you need to remove an element’s assigned height under a specific condition like at a particular breakpoint blog responsive-omencss-breakpoints : html div class=h-full sm:h-auto ! div 💡 click how to use the default minimum height docs sizing-minimum-height or maximum height docs sizing-maximum-height active focus and hover states omencss css class example range - active:h- size active :h-1px:active height: 1px; active:h-0px to active:h-100px focus:h- size focus :h-1px:focus height: 1px; focus:h-0px to focus:h-100px hover:h- size hover :h-1px:focus height: 1px; hover:h-0px to hover:h-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:h-10px to only apply the h-10px utility on hover html div class=h-50px hover:h-20px h-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:h-10px md: 480px - 768px md:h-10px lg: 768px - 1080px lg:h-10px omencss media queries can also be combined with active focus and hover states for example use sm:h-10px to apply the h-10px utility at only small screen sizes at or below 480px or active:md:h-10px to apply the h-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: conditionally state : media query : classname size p e active:md:m-10px executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example - active:h- size focus:h- size hover:h- size active height focus height hover height active:sm:h- size focus:sm:h- size hover:sm:h- size active small screens height focus small screens height hover small screens height active:md:h- size focus:md:h- size hover:md:h- size active medium screens height focus medium screens height hover medium screens height active:lg:h- size focus:lg:h- size hover:lg:h- size active large screens height focus large screens height hover large screens height '
---

| _omenCSS_ | CSS class example          | minimum Value | maximum Value | Step |
| --------- | -------------------------- | ------------- | ------------- | ---- |
| h-{size}  | .h-1px { height: 1px; }    | h-0px         | h-100px       | 1px  |
| h-{size}  | .h-11rem { height: 1rem; } | h-11rem       | h-100rem      | 1rem |
| h-{size}  | .h-1% { height: 1%; }      | h-0per        | h-100per      | 1%   |
| h-{size}  | .h-1vw { height: 1vw; }    | h-0vw         | h-100vw       | 1vw  |

## Fixed heights

Control the height on every HTML element by using the h-{size} utility with a postfix variable - like `{-px | -rem | -vw}`.

1. The pixel height class range is from 0 to positive 100 and uses the [px] postfix. The steps are +/- 1px. e.g. `h-0px, h-1px,... h-100px`

2. The rem height class range is from positive 11rem to positive 100rem and uses the [rem] postfix. The steps are +/- 1rem. e.g. `h-11rem, h-12rem,... h-100rem`. ⚠️ Remember 1rem = 10px or 10rem = 100px

3. The viewport height class range is from 0vw to positive 100vw and uses the [vw] postfix. The steps are +/- 1vw. e.g. `h-0vw, h-1vw,... h-100vw`. Use h-100vw to make an element span the entire height of the viewport.

```html
<div class="h-50px">h-50px</div>
<!-- 50rem is equal to: 500px -->
<div class="h-50rem">h-50rem</div>
<!-- 50per is equal to: 50% -->
<div class="h-50per">h-50per</div>
<!-- 50vw is equal to: viewport height of 50 -->
<div class="h-50vw">h-50vw</div>
```

## Percentage heights

Control the percentage height on every HTML element by using the h-{size} utility with the postfix variable `{-per}`.

1. The percentage height class range is from 0 to positive 100 and uses the [per] postfix. The steps are +/- 1%. e.g. `h-0per, h-1per,... h-100per`

```html
<div class="h-50per">h-50per</div>
```

## Reset height

The `{h-auto}` utility can be useful if you need to remove an element’s assigned height under a specific condition, like at a particular [breakpoint](/blog/responsive-omencss-breakpoints):

```html
<div class="h-full sm:h-auto">
  <!-- ... -->
</div>
```

💡 [Click] how to use the default [minimum height](/docs/sizing-minimum-height) or [maximum height](/docs/sizing-maximum-height).

## Active, focus, and hover states

| _omenCSS_       | CSS class example                      | Range                          |
| --------------- | -------------------------------------- | ------------------------------ |
| active:h-{size} | .active\:h-1px:active { height: 1px; } | active:h-0px to active:h-100px |
| focus:h-{size}  | .focus\:h-1px:focus { height: 1px; }   | focus:h-0px to focus:h-100px   |
| hover:h-{size}  | .hover\:h-1px:focus { height: 1px; }   | hover:h-0px to hover:h-100px   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:h-10px` to only apply the h-10px utility on hover.

```html
<div class="h-50px hover:h-20px">h-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | omenCSS example |
| ----------- | -------------- | --------------- |
| sm:         | 0px - 480px    | .sm:h-10px      |
| md:         | 480px - 768px  | .md:h-10px      |
| lg:         | 768px - 1080px | .lg:h-10px      |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:h-10px` to apply the h-10px utility at only small screen sizes at or below 480px. Or `active:md:h-10px` to apply the h-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{conditionally state}:{media query}:{classname}{size}` p.e. `active:md:m-10px`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                        | spoken example                                                                          |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| active:h-{size} , focus:h-{size} , hover:h-{size}          | active height, focus height, hover height                                               |
| active:sm:h-{size} , focus:sm:h-{size} , hover:sm:h-{size} | active small screens height, focus small screens height, hover small screens height,    |
| active:md:h-{size} , focus:md:h-{size} , hover:md:h-{size} | active medium screens height, focus medium screens height, hover medium screens height, |
| active:lg:h-{size} , focus:lg:h-{size} , hover:lg:h-{size} | active large screens height, focus large screens height, hover large screens height,    |