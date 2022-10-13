---
isBlog: false
title: 'Color'
date: 'Oct 13. 2022'
excerpt: 'General information about greenCSS colors.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Color'
author: 'Severin Glaser'
keywords: 'color, greencss color, custom css color'
classNames: ''
plainText: ' greencss css class example minimum value maximum value step type color bg-green background-color: 80f906; default color 10 + -1 type color number bg-green-10 background-color: f9fff3; default color 10 + -1 custom type color custom-bg-primary background-color: var custom-color-primary ; custom color n a n a color handling control the color on every html element by using the greencss classes shown above the structure is always the same define for what element you need a color you can choose between the following types: `text-` to style a text `bg-` to style a background `border-` to style a border `fill-` to fill an svg `accent-` to provide an accent color or `text-decoration-` to handle the text decoration all colors are defined in ascending order from 1-10 for example `bg-red` has the highest contrast `bg-red-1` is lightened by 4 75% bg-red-10 provides a background color that is close to white 1 check all greencss colors brand colours 2 a small number means that the color has more dark tones 3 a high number has more white tones  custom colors if you do not want to use the predefined color selection but still want to use greencss you can add your own favorite color or any color from your corporate identity if you choose your own colour be aware that there is no ascending color combination available like with the predefined colours 1 create an independent css file import it in before greencss 2 create a `:root` class and add the custom colors the following variables are available must be adopted exactly! 3 available primary colour properties: ` custom-yellow` ` custom-red` ` custom-blue` 4 available secondary colour properties: ` custom-purple` ` custom-green` ` custom-orange` 5 available corporate colour properties: ` custom-primary` ` custom-secondary`  active focus and hover states greencss css class example active:bg color -number active :bg-green:active background-color: green; focus:bg color -number focus :bg-green:focus background-color: green; hover:bg color -number hover :bg-green:focus background-color: green; hover:custom-bg color hover :custom-bg-primary background-color: var custom-color-primary ; all predefined and custom colour schemes have active focus and hover classes you can also use these on mobile devices  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range greencss example sm: 0px 480px sm:bg-green md: 480px 768px md:bg-green lg: 768px 1080px lg:bg-green greencss media queries can also be combined with active focus and hover states for example use `sm:text-green` to apply the `text-green` utility at only small screen sizes at or below 480px or `active:md:text-green` to apply the `text-green` utility class only at medium screen sizes 480px 768px and on active state 1 the structure for default colors is as follows: ` conditional state : media query : type color ` p e `sm:active:md:text-green` 1 the structure for custom colors is as follows: ` conditional state : media query : type color ` p e `active:lg:custom-text-yellow` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: greencss class names spoken example active:bg-green focus:bg-green hover:bg-green active background color focus background color hover background color active:sm:bg-green focus:sm:bg-green hover:sm:bg-green active small screens background color focus small screens background color hover small screens background color active:md:bg-green focus:md:bg-green hover:md:bg-green active medium screens background color focus medium screens background color hover medium screens background color active:lg:bg-green focus:lg:bg-green hover:lg:bg-green active large screens background color focus large screens background color hover large screens background color '
---

| _greenCSS_              | CSS class example                                                     | minimum Value | maximum Value | Step |
| ----------------------- | --------------------------------------------------------------------- | ------------- | ------------- | ---- |
| {type}-{color}          | .bg-green { background-color: #80f906; }                              | default color | 10            | +/-1 |
| {type}-{color}-{number} | .bg-green-10 { background-color: #f9fff3; }                           | default color | 10            | +/-1 |
| custom-{type}-{color}   | .custom-bg-primary { background-color: var(--custom-color-primary); } | custom color  | N/A           | N/A  |

## Color handling

Control the color on every HTML element by using the greenCSS classes shown above. The structure is always the same. Define for what element you need a color. You can choose between the following types: `text-` to style a text, `bg-` to style a background, `border-` to style a border, `fill-` to fill an svg, `accent-` to provide an accent color or `text-decoration-` to handle the text decoration. All colors are defined in ascending order from 1-10. For example, `bg-red` has the highest contrast, `bg-red-1` is lightened by 4.75%. bg-red-10" provides a background color that is close to white.

1. Check all [greenCSS colors](/brand/colours)
2. A small number means that the color has more dark tones.
3. A high number has more white tones.

```html
<h1 class="bg-green text-30px">{title}</h1>
<h2 class="bg-green-1 text-30px">{title}</h2>
<h2 class="bg-green-2 text-30px">{title}</h2>
...
<p class="bg-green-10 text-15px">{children}</p>
```

### Custom colors

If you do not want to use the predefined color selection, but still want to use greenCSS, you can add your own favorite color or any color from your corporate identity. If you choose your own colour, be aware that there is no ascending color combination available (like with the predefined colours).

1. Create an independent .css file. Import it in before greenCSS.
2. Create a `:root` class and add the custom colors. The following variables are available must be adopted exactly!
3. Available primary colour properties: `--custom-yellow`, `--custom-red`, `--custom-blue`.
4. Available secondary colour properties: `--custom-purple`, `--custom-green`, `--custom-orange`.
5. Available corporate colour properties: `--custom-primary`, `--custom-secondary`.

```css
:root {
  --custom-color-yellow: yellow; // choose your custom yellow
  --custom-color-red: red; // choose your custom red
  --custom-color-blue: blue; // choose your custom blue
  --custom-color-purple: purple; // choose your custom purple
  --custom-color-green: green; // choose your custom green
  --custom-color-orange: orange; // choose your custom orange
  --custom-color-primary: #b950c8; // choose your custom corporate color
  --custom-color-secondary: #50c8a6; // choose another corporate color
}
```

## Active, focus, and hover states

| _greenCSS_                 | CSS class example                                                            |
| -------------------------- | ---------------------------------------------------------------------------- |
| active:bg-{color}{-number} | .active\:bg-green:active { background-color: green; }                        |
| focus:bg-{color}{-number}  | .focus\:bg-green:focus { background-color: green; }                          |
| hover:bg-{color}{-number}  | .hover\:bg-green:focus { background-color: green; }                          |
| hover:custom-bg-{color}    | .hover\:custom-bg-primary { background-color: var(--custom-color-primary); } |

All predefined and custom colour schemes have active, focus and hover classes. You can also use these on mobile devices.

```html
<div
  class="bg-green-10 hover:bg-green text-black hover:custom-text-primary active:custom-text-secondary focus:custom-text-secondary">
  {children}
</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range          | greenCSS example |
| ----------- | -------------- | ---------------- |
| sm:         | 0px - 480px    | .sm:bg-green     |
| md:         | 480px - 768px  | .md:bg-green     |
| lg:         | 768px - 1080px | .lg:bg-green     |

greenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:text-green` to apply the `text-green` utility at only small screen sizes at or below 480px. Or `active:md:text-green` to apply the `text-green` utility class only at medium screen sizes (480px) - (768px) and on active state.

1. The structure for default colors is as follows: `{conditional state}:{media query}:{type}-{color}` p.e. `sm:active:md:text-green`
1. The structure for custom colors is as follows: `{conditional state}:{media query}:{type}-{color}` p.e. `active:lg:custom-text-yellow`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| greenCSS class names                                       | spoken example                                                                                                        |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| active:bg-green , focus:bg-green , hover:bg-green          | active background color, focus background color, hover background color                                               |
| active:sm:bg-green , focus:sm:bg-green , hover:sm:bg-green | active small screens background color, focus small screens background color, hover small screens background color,    |
| active:md:bg-green , focus:md:bg-green , hover:md:bg-green | active medium screens background color, focus medium screens background color, hover medium screens background color, |
| active:lg:bg-green , focus:lg:bg-green , hover:lg:bg-green | active large screens background color, focus large screens background color, hover large screens background color,    |
