---
isBlog: false
title: 'Margin Side'
date: 'Apr 06. 2022'
excerpt: 'Utility classes for controlling an element`s margin to its sides.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Spacing'
author: 'Severin Glaser'
keywords: 'margin, negative margin, spacing, margin-top, margin-right, margin-bottom, margin-left'
classNames: ''
plainText: ' greenCSS css class example minimum value maximum value step m t r b l size mt-1px margin-top: 1px; mt-0px mt-100px 1px m t r b l -neg size mt-neg-1px margin-top: -1px; mt-neg-100px mt-neg-1px 1px m t r b l size mt-1rem margin-top: 0rem; mt-0rem mt-30rem 1px m t r b l -neg size mt-neg-30rem margin-top: -30rem; mt-neg-30rem mt-neg-1rem 1px add margin to specific side control the margin on a specific side such as top right bottom or left margin-top margin-right margin-bottom margin-left use the `m t r b l size ` utility the margin class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + 1px e g `mt-0px mt-1px mt-100px` additionally you can also use rem values reminder: 1rem = 10px the rem margin class range is from negative -30 to positive 30 and uses the rem postfix the steps are + 1rem e g `mt-0rem mt-1rem mt-30rem`  💡 how to use symmetrical margin on every side? have a closer look at margin docs spacing-margin active focus and hover states greenCSS css class example range active:mt size active :mt-1px:active margin-top: 1px; active:mt-neg-100px to active:mt-100px focus:mt size focus :mt-1px:focus margin-top: 1px; focus:mt-neg-100px to focus:mt-100px hover:mt size hover :mt-1px:focus margin-top: 1px; hover:mt-neg-100px to hover:mt-100px greenCSS let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:mt-10px` to only apply the mt-10px utility on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greenCSS example sm: 0px 480px sm:mt-10px md: 480px 768px md:mt-10px lg: 768px 1080px lg:mt-10px greenCSS media queries can also be combined with active focus and hover states for example use `sm:mt-10px` to apply the mt-10px utility at only small screen sizes at or below 480px or `active:md:mt-10px` to apply the mt-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: ` active focus hover : media query :m t r b l size ` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greenCSS class names spoken example active:mt active:mr active:mb active:ml active margin top active margin right active margin bottom active margin left focus:mt focus:mr focus:mb focus:ml focus margin top focus margin right focus margin bottom focus margin left hover:mt hover:mr hover:mb hover:ml hover margin top hover margin right hover margin bottom hover margin left sources margin-top https: developer mozilla org en-us docs web css margin-top margin-right https: developer mozilla org en-us docs web css margin-right margin-bottom https: developer mozilla org en-us docs web css margin-bottom margin-left https: developer mozilla org en-us docs web css margin-left '
---

| _greenCSS_               | CSS class example                     | minimum Value | maximum Value | Step |
| ------------------------ | ------------------------------------- | ------------- | ------------- | ---- |
| m{t\|r\|b\|l}-{size}     | .mt-1px { margin-top: 1px; }          | mt-0px        | mt-100px      | 1px  |
| m{t\|r\|b\|l}-neg-{size} | .mt-neg-1px { margin-top: -1px; }     | mt-neg-100px  | mt-neg-1px    | 1px  |
| m{t\|r\|b\|l}-{size}     | .mt-1rem { margin-top: 0rem; }        | mt-0rem       | mt-30rem      | 1px  |
| m{t\|r\|b\|l}-neg-{size} | .mt-neg-30rem { margin-top: -30rem; } | mt-neg-30rem  | mt-neg-1rem   | 1px  |

## Add margin to specific side

Control the margin on a specific side such as top, right, bottom or left [margin-top, margin-right, margin-bottom, margin-left]. Use the `m{t\|r\|b\|l}-{size}` utility. The margin class range is from negative -100 to positive 100, uses pixel and the [px] postfix. The steps are +/- 1px. e.g. `mt-0px, mt-1px,... mt-100px`

Additionally you can also use rem values. Reminder: 1rem = 10px. The rem margin class range is from negative -30 to positive 30 and uses the [rem] postfix. The steps are +/- 1rem. e.g. `mt-0rem, mt-1rem,... mt-30rem`

```html
<div class="mt-50px">mt-50px</div>
<div class="mr-50px">mr-50px</div>
<div class="mb-50px">mb-50px</div>
<div class="ml-50px">ml-50px</div>
```

💡 How to use symmetrical margin on every side? Have a closer look at [margin](/docs/spacing-margin).

## Active, focus, and hover states

| _greenCSS_       | CSS class example                           | Range                                  |
| ---------------- | ------------------------------------------- | -------------------------------------- |
| active:mt-{size} | .active\:mt-1px:active { margin-top: 1px; } | active:mt-neg-100px to active:mt-100px |
| focus:mt-{size}  | .focus\:mt-1px:focus { margin-top: 1px; }   | focus:mt-neg-100px to focus:mt-100px   |
| hover:mt-{size}  | .hover\:mt-1px:focus { margin-top: 1px; }   | hover:mt-neg-100px to hover:mt-100px   |

greenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:mt-10px` to only apply the mt-10px utility on hover.

```html
<div class="mt-50px hover:mt-20px">m-50px</div>
<div class="mr-50px hover:mr-20px">m-50px</div>
<div class="mb-50px hover:mb-20px">m-50px</div>
<div class="ml-50px hover:ml-20px">m-50px</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:mt-10px      |
| md:         | 480px - 768px  | .md:mt-10px      |
| lg:         | 768px - 1080px | .lg:mt-10px      |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:mt-10px` to apply the mt-10px utility at only small screen sizes at or below 480px. Or `active:md:mt-10px` to apply the mt-10px utility at only between small screen sizes (480px) and medium screen sizes (768px).

1. The structure is as follows: `{active | focus | hover}:{media query}:m{t\|r\|b\|l}-{size}`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                           | spoken example                                                                   |
| ---------------------------------------------- | -------------------------------------------------------------------------------- |
| active:mt-, active:mr-, active:mb-, active:ml- | active margin top, active margin right, active margin bottom, active margin left |
| focus:mt-, focus:mr-, focus:mb-, focus:ml-     | focus margin top, focus margin right, focus margin bottom, focus margin left     |
| hover:mt-, hover:mr-, hover:mb-, hover:ml-     | hover margin top, hover margin right, hover margin bottom, hover margin left     |

## Sources

- [margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
- [margin-right](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
- [margin-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
- [margin-left](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
