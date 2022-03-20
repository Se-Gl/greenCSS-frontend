export const posts = [{"slug":"basic-usage","frontmatter":{"isBlog":false,"title":"base styles & guideline - how to use omencss","date":"mar 18. 2022","excerpt":"omencss foundations - an opinionated set of base styles, structure and guidelines for omencss projects.","cover*image":"/images/blog/cover/default-image-blog.webp","category":"base-styles","author":"severin glaser","keywords":"base style, guideline, guide, structure","classNames":"","plainText":" omencss is a pure css library built with scss compiled and minified for all javascript python php etc frameworks the entire code base or partial code classes can be easily imported into your project all default browser variables are disabled this allows you to decide for your own design structure and arrangement all omencss classes have the same structure a simple explanation of this principle can be given with the help of the text-blue class 1 if the text colour for an element is to be changed the class is inserted this value is the default value for all responsive display sizes html p class=text-blue purple text p --- 1 if the text colour for an element is to be changed on small screens only 0px - 480px the class is inserted with a pre-class called sm: in the following example on small screens up to 480px width the text is displayed in purple on other screens the text is displayed in blue - as the default class is set to text-blue html p class=text-blue sm:text-purple purple text p --- 1 if the text colour for an element is to be changed on medium screens only 480px - 768px the class is inserted with a pre-class called md: in the following example on medium screens 480px - 768px width the text is displayed in purple is the screen smaller or bigger the text is displayed in blue - as the default class is set to text-blue html p class=text-blue md:text-purple purple text p --- 1 if the text colour for an element is to be changed on large screens only 768px - 1080px the class is inserted with a pre-class called lg: in the following example on medium screens 768px - 1080px width the text is displayed in purple is the screen smaller or bigger the text is displayed in blue - as the default class is set to text-blue html p class=text-blue lg:text-purple purple text p --- 1 note that this method can also be used for hover focus or active classes the same principle can be used to add a pre-class the default values in the following example shows a blue text with a blue-1 text colour on hover on small screens the text becomes red and has a hover class of red-1 html p class=text-blue hover:text-blue-1 sm:text-red hover:sm:text-red-1 purple text p values & unit sizes some classes require special mathemathical values all amounts are specified within a class this allows intuitive and easy to understand writing of css classes the value and the unit are always written after the class html opacity 1 percent p class=opacity-1per opacity text p html width 100 pixel div class=w-100px width element div html width 20 rem div class=w-20rem width element div the properties can also have netagive values those are supplemented by the -neg class html on small screens rotate the element by 180 degrees in a netagive direction div class=sm:rotate-neg-180deg rotate in negative direction div default browser values are removed 1 omencss removes all of the default values like margins paddings text-decoration headings blockquotes paragraphs input states lists border etc 2 visitors who do not want to experience animations or transitions will not register motion 3 the standard font size is automatically converted to the power of 10 reduced by 62 5% in other words 1rem = 10pixel this decision simplifies the calculation for the developer css default css reset file html body div span applet object iframe h1 h2 h3 h4 h5 h6 p blockquote pre a abbr acronym address big cite code del dfn em img ins kbd q s samp small strike strong sub sup tt var b u i center dl dt dd ol ul li fieldset form label legend table caption tbody tfoot thead tr th td article aside canvas details embed figure figcaption footer header hgroup menu nav output ruby section summary time mark audio video margin: 0; padding: 0; border: 0; font: inherit; vertical-align: baseline; html5 display-role reset for older browsers article aside details figcaption figure footer header hgroup menu nav section display: block; body line-height: 1; ol ul list-style: none; blockquote q quotes: none; blockquote:before blockquote:after q:before q:after content: ''; content: none; table border-collapse: collapse; border-spacing: 0; set core root defaults html font-size: 62 5%; default pixel size reset to 10px remove all animations transitions and smooth scroll for people that prefer not to see them @media prefers-reduced-motion: reduce html:focus-within scroll-behavior: auto; ::before ::after animation-duration: 0 01ms !important; animation-iteration-count: 1 !important; transition-duration: 0 01ms !important; scroll-behavior: auto !important; ::before ::after box-sizing: border-box; margin: 0; body line-height: 1 5; -webkit-font-smoothing: antialiased; img picture video canvas svg display: block; max-width: 100%; input button textarea select font: inherit; p h1 h2 h3 h4 h5 h6 overflow-wrap: break-word; root next isolation: isolate; remove outline a:focus button:focus input:focus :focus outline: none; a::-moz-focus-inner button::-moz-focus-inner input::-moz-focus-inner ::-moz-focus-inner border: 0; :focus outline: none; ::-moz-focus-inner border: 0; executive summary 1 all default browser values are reset allowing you to incorporate your design and avoid annoying default settings 2 the text and the distances are calculated to the power of 10 10px = 1rem 3 all omencss classes have the same structure 4 the default class does not have any pre-classes p e text-blue 5 values and unit sizes are written as a post-class - at the end of every class p e opacity-100per 6 omencss lets you conditionally apply utility classes in different states using variant modifiers such as active hover or focus statements the utility classes are entered before the default class check the adequate documentation site for the respective class p e hover:text-blue mnemonic aid: on hover set the colour to blue 7 you can also use variant modifiers to target media queries and make your website responsive within seconds the variant modifier classes are entered after the utility class and before the default class p e hover:sm:text-blue mnemonic aid: hover on small screens the text with a blue colour "}},{"slug":"spacing-margin-horizontal","frontmatter":{"isBlog":false,"title":"margin horizontal","date":"mar 20. 2022","excerpt":"utility classes for controlling an element`s margin to its horizontal sides.","cover*image":"/images/blog/cover/default-image-blog.webp","category":"spacing","author":"severin glaser","keywords":"margin, negative margin, spacing, margin-inline","classNames":"","plainText":" omencss css class example range - mx- size mx-1px margin-inline: 1px; mx-0px to mx-100px mx-neg- size mx-neg-1px margin-inline: -1px; mx-neg-100px to mx-neg-1px add horizontal margin control the horizontal margin on the right and left margin-inline use the mx- size utility the horizontal margin class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g mx-0px mx-1px mx-100px additionally you can also use rem values reminder: 1rem = 10px the rem margin class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g mx-0rem mx-1rem mx-30rem ⚠️ margin-inline can mainly be display in modern browsers with the latest updates instead you can also use margin left and right docs spacing-margin-side html div class=mx-50px mx-50px div ! is equal to: div class=mr-50px ml-50px mr-50px ml-50px div active focus and hover states omencss css class example range active:mx- size active :mx-1px:active margin-inline: 1px; active:mx-neg-100px to active:mx-100px focus:mx- size focus :mx-1px:focus margin-inline: 1px; focus:mx-neg-100px to focus:mx-100px hover:mx- size hover :mx-1px:focus margin-inline: 1px; hover:mx-neg-100px to hover:mx-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:mx-10px to only apply the mx-10px utility on hover html div class=mx-50px hover:mx-10px px-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:mx-10px md: 480px - 768px md:mx-10px lg: 768px - 1080px lg:mx-10px omencss media queries can also be combined with active focus and hover states for example use sm:mx-10px to apply the mx-10px utility at only small screen sizes at or below 480px or active:md:mx-10px to apply the mx-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :mx- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example - active:mx- focus:mx- hover:mx- active margin inline focus margin inline hover margin inline active:sm:mx- focus:sm:mx- hover:sm:mx- active small screens margin inline focus small screens margin inline hover small screens margin inline active:md:mx- focus:md:mx- hover:md:mx- active medium screens margin inline focus medium screens margin inline hover medium screens margin inline active:lg:mx- focus:lg:mx- hover:lg:mx- active large screens margin inline focus large screens margin inline hover large screens margin inline "}},{"slug":"spacing-margin-side","frontmatter":{"isBlog":false,"title":"margin side","date":"mar 20. 2022","excerpt":"utility classes for controlling an element`s margin to its sides.","cover*image":"/images/blog/cover/default-image-blog.webp","category":"spacing","author":"severin glaser","keywords":"margin, negative margin, spacing, margin-top, margin-right, margin-bottom, margin-left","classNames":"","plainText":" omencss css class example range - - m t r b l - size mt-1px margin-top: 1px; mt-0px to mt-100px m t r b l -neg- size mt-neg-1px margin-top: -1px; mt-neg-100px to mt-neg-1px m t r b l - size mt-1rem margin-top: 0rem; mt-0rem to mt-30rem m t r b l -neg- size mt-neg-30rem margin-top: -30rem; mt-neg-30rem to mt-neg-1rem add margin to specific side control the margin on a specific side such as top right bottom or left margin-top margin-right margin-bottom margin-left use the m t r b l - size utility the margin class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g mt-0px mt-1px mt-100px additionally you can also use rem values reminder: 1rem = 10px the rem margin class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g mt-0rem mt-1rem mt-30rem html div class=mt-50px mt-50px div div class=mr-50px mr-50px div div class=mb-50px mb-50px div div class=ml-50px ml-50px div ⚠️ how to use symmetrical margin on every side? have a closer look at margin docs spacing-margin active focus and hover states omencss css class example range - active:mt- size active :mt-1px:active margin-top: 1px; active:mt-neg-100px to active:mt-100px focus:mt- size focus :mt-1px:focus margin-top: 1px; focus:mt-neg-100px to focus:mt-100px hover:mt- size hover :mt-1px:focus margin-top: 1px; hover:mt-neg-100px to hover:mt-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:mt-10px to only apply the mt-10px utility on hover html div class=mt-50px hover:mt-20px m-50px div div class=mr-50px hover:mr-20px m-50px div div class=mb-50px hover:mb-20px m-50px div div class=ml-50px hover:ml-20px m-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:mt-10px md: 480px - 768px md:mt-10px lg: 768px - 1080px lg:mt-10px omencss media queries can also be combined with active focus and hover states for example use sm:mt-10px to apply the mt-10px utility at only small screen sizes at or below 480px or active:md:mt-10px to apply the mt-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :m t r b l - size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example active:mt- active:mr- active:mb- active:ml- active margin top active margin right active margin bottom active margin left focus:mt- focus:mr- focus:mb- focus:ml- focus margin top focus margin right focus margin bottom focus margin left hover:mt- hover:mr- hover:mb- hover:ml- hover margin top hover margin right hover margin bottom hover margin left "}},{"slug":"spacing-margin","frontmatter":{"isBlog":false,"title":"margin","date":"mar 20. 2022","excerpt":"utility classes for controlling an element`s margin.","cover*image":"/images/blog/cover/default-image-blog.webp","category":"spacing","author":"severin glaser","keywords":"margin, negative margin, spacing, css class, responsive","classNames":"","plainText":" omencss css class example range - m- size m-1px margin: 1px; m-0px to m-100px m-neg- size m-neg-1px margin: -1px; m-neg-100px to m-neg-1px m- size m-1rem margin: 0rem; m-0rem to m-30rem m-neg- size m-neg-30rem margin: -30rem; m-neg-30rem to m-neg-1rem add margin to all sides control the margin on all sides of an html element by using the m- size utility the pixel margin class range is from negative -100 to positive 100 and uses the px postfix the steps are + - 1px e g m-0px m-1px m-100px additionally you can also use rem values reminder: 1rem = 10px the rem margin class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g m-0rem m-1rem m-30rem html div class=m-50px m-50px div ! is equal to: div class=pt-50px pr-50px pb-50px pl-50px pt-50px pr-50px pb-50px pl-50px div ⚠️ how to use margin on a specific side? have a closer look at margin top right bottom and left docs spacing-margin-side active focus and hover states omencss css class example range - active:m- size active :m-1px:active margin: 1px; active:m-neg-100px to active:m-100px focus:m- size focus :m-1px:focus margin: 1px; focus:m-neg-100px to focus:m-100px hover:m- size hover :m-1px:focus margin: 1px; hover:m-neg-100px to hover:m-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:m-10px to only apply the m-10px utility on hover html div class=m-50px hover:m-20px m-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:m-10px md: 480px - 768px md:m-10px lg: 768px - 1080px lg:m-10px omencss media queries can also be combined with active focus and hover states for example use sm:m-10px to apply the m-10px utility at only small screen sizes at or below 480px or active:md:m-10px to apply the m-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :m- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example - active:m- size focus:m- size hover:m- size active margin focus margin hover margin active:sm:m- size focus:sm:m- size hover:sm:m- size active small screens margin focus small screens margin hover small screens margin active:md:m- size focus:md:m- size hover:md:m- size active medium screens margin focus medium screens margin hover medium screens margin active:lg:m- size focus:lg:m- size hover:lg:m- size active large screens margin focus large screens margin hover large screens margin "}},{"slug":"spacing-padding-horizontal","frontmatter":{"isBlog":false,"title":"padding horizontal","date":"mar 20. 2022","excerpt":"utility classes for controlling an element`s padding to its horizontal sides.","cover*image":"/images/blog/cover/default-image-blog.webp","category":"spacing","author":"severin glaser","keywords":"padding, negative padding, spacing, padding-inline","classNames":"","plainText":" omencss css class example range - - px- size px-1px padding-inline: 1px; px-0px to px-100px px-neg- size px-neg-1px padding-inline: -1px; px-neg-100px to px-neg-1px add horizontal padding control the horizontal padding on the right and left padding-inline use the px- size utility the horizontal padding class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g px-0px px-1px px-100px additionally you can also use rem values reminder: 1rem = 10px the rem padding class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g px-0rem px-1rem px-30rem ⚠️ padding-inline can be mainly be display in modern browsers with the latest updates instead you can also use padding left and right docs spacing-padding-side html div class=px-50px px-50px div div class=pr-50px pr-50px div div class=pb-50px pb-50px div div class=pl-50px pl-50px div active focus and hover states omencss css class example range - active:px- size active :px-1px:active padding-inline: 1px; active:px-neg-100px to active:px-100px focus:px- size focus :px-1px:focus padding-inline: 1px; focus:px-neg-100px to focus:px-100px hover:px- size hover :px-1px:focus padding-inline: 1px; hover:px-neg-100px to hover:px-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:px-10px to only apply the px-10px utility on hover html div class=px-50px hover:px-10px p-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:px-10px md: 480px - 768px md:px-10px lg: 768px - 1080px lg:px-10px omencss media queries can also be combined with active focus and hover states for example use sm:px-10px to apply the px-10px utility at only small screen sizes at or below 480px or active:md:px-10px to apply the px-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :px- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example - - active:px- focus:px- hover:px- active padding inline focus padding inline hover padding inline active:sm:px- focus:sm:px- hover:sm:px- active small screens padding inline focus small screens padding inline hover small screens padding inline active:md:px- focus:md:px- hover:md:px- active medium screens padding inline focus medium screens padding inline hover medium screens padding inline active:lg:px- focus:lg:px- hover:lg:px- active large screens padding inline focus large screens padding inline hover large screens padding inline "}},{"slug":"spacing-padding-side","frontmatter":{"isBlog":false,"title":"padding side","date":"mar 20. 2022","excerpt":"utility classes for controlling an element`s padding to its sides.","cover*image":"/images/blog/cover/default-image-blog.webp","category":"spacing","author":"severin glaser","keywords":"padding, negative padding, spacing, padding-top, padding-right, padding-bottom, padding-left","classNames":"","plainText":" omencss css class example range - p t r b l - size pt-1px padding-top: 1px; pt-0px to pt-100px p t r b l -neg- size pt-neg-1px padding-top: -1px; pt-neg-100px to pt-neg-1px p t r b l - size pt-1rem padding-top: 0rem; pt-0rem to pt-30rem p t r b l -neg- size pt-neg-30rem padding-top: -30rem; pt-neg-30rem to pt-neg-1rem add padding to specific side control the padding on a specific side such as top right bottom or left padding-top padding-right padding-bottom padding-left use the p t r b l - size utility the padding class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g pt-0px pt-1px pt-100px additionally you can also use rem values reminder: 1rem = 10px the rem padding class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g pt-0rem pt-1rem pt-30rem html div class=pt-50px pt-50px div div class=pr-50px pr-50px div div class=pb-50px pb-50px div div class=pl-50px pl-50px div ⚠️ how to use symmetrical padding on every side? have a closer look at padding docs spacing-padding active focus and hover states omencss css class example range active:pt- size active :pt-1px:active padding-top: 1px; active:pt-neg-100px to active:pt-100px focus:pt- size focus :pt-1px:focus padding-top: 1px; focus:pt-neg-100px to focus:pt-100px hover:pt- size hover :pt-1px:focus padding-top: 1px; hover:pt-neg-100px to hover:pt-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:pt-10px to only apply the pt-10px utility on hover html div class=pt-50px hover:pt-20px p-50px div div class=pr-50px hover:pr-20px p-50px div div class=pb-50px hover:pb-20px p-50px div div class=pl-50px hover:pl-20px p-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:pt-10px md: 480px - 768px md:pt-10px lg: 768px - 1080px lg:pt-10px omencss media queries can also be combined with active focus and hover states for example use sm:pt-10px to apply the pt-10px utility at only small screen sizes at or below 480px or active:md:pt-10px to apply the pt-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :p t r b l - size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example active:pt- active:pr- active:pb- active:pl- active padding top active padding right active padding bottom active padding left focus:pt- focus:pr- focus:pb- focus:pl- focus padding top focus padding right focus padding bottom focus padding left hover:pt- hover:pr- hover:pb- hover:pl- hover padding top hover padding right hover padding bottom hover padding left "}},{"slug":"spacing-padding-vertical","frontmatter":{"isBlog":false,"title":"padding vertical","date":"mar 20. 2022","excerpt":"utility classes for controlling an element`s padding to its vertical sides.","cover*image":"/images/blog/cover/default-image-blog.webp","category":"spacing","author":"severin glaser","keywords":"padding, negative padding, spacing, padding-block","classNames":"","plainText":" omencss css class example range - py- size py-1px padding-block: 1px; py-0px to py-100px py-neg- size py-neg-1px padding-block: -1px; py-neg-100px to py-neg-1px add vertical padding control the vertical padding on the top and bottom padding-block use the py- size utility the vertical padding class range is from negative -100 to positive 100 uses pixel and the px postfix the steps are + - 1px e g py-0px py-1px py-100px additionally you can also use rem values reminder: 1rem = 10px the rem padding class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g py-0rem py-1rem py-30rem ⚠️ padding-block can be mainly be display in modern browsers with the latest updates instead you can also use padding top and bottom docs spacing-padding-vertical html div class=py-50px px-50px div active focus and hover states omencss css class example range active:py- size active :py-1px:active padding-block: 1px; active:py-neg-100px to active:py-100px focus:py- size focus :py-1px:focus padding-block: 1px; focus:py-neg-100px to focus:py-100px hover:py- size hover :py-1px:focus padding-block: 1px; hover:py-neg-100px to hover:py-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:py-10px to only apply the py-10px utility on hover html div class=py-50px hover:py-10px py-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:py-10px md: 480px - 768px md:py-10px lg: 768px - 1080px lg:py-10px omencss media queries can also be combined with active focus and hover states for example use sm:py-10px to apply the py-10px utility at only small screen sizes at or below 480px or active:md:py-10px to apply the py-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :py- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example - active:py- focus:py- hover:py- active padding block focus padding block hover padding block active:sm:py- focus:sm:py- hover:sm:py- active small screens padding block focus small screens padding block hover small screens padding block active:md:py- focus:md:py- hover:md:py- active medium screens padding block focus medium screens padding block hover medium screens padding block active:lg:py- focus:lg:py- hover:lg:py- active large screens padding block focus large screens padding block hover large screens padding block "}},{"slug":"spacing-padding","frontmatter":{"isBlog":false,"title":"padding","date":"mar 20. 2022","excerpt":"utility classes for controlling an element`s padding.","cover*image":"/images/blog/cover/default-image-blog.webp","category":"spacing","author":"severin glaser","keywords":"padding, negative padding, spacing, css class, responsive","classNames":"","plainText":" omencss css class example range - - p- size p-1px padding: 1px; p-0px to p-100px p-neg- size p-neg-1px padding: -1px; p-neg-100px to p-neg-1px p- size p-1rem padding: 0rem; p-0rem to p-30rem p-neg- size p-neg-30rem padding: -30rem; p-neg-30rem to p-neg-1rem add padding to all sides control the padding on all sides of an html element by using the p- size utility the pixel padding class range is from negative -100 to positive 100 and uses the px postfix the steps are + - 1px e g p-0px p-1px p-100px additionally you can also use rem values reminder: 1rem = 10px the rem padding class range is from negative -30 to positive 30 and uses the rem postfix the steps are + - 1rem e g p-0rem p-1rem p-30rem html div class=p-50px p-50px div ⚠️ how to use padding on a specific side? have a closer look at padding top right bottom and left docs spacing-padding-side active focus and hover states omencss css class example range - - active:p- size active :p-1px:active padding: 1px; active:p-neg-100px to active:p-100px focus:p- size focus :p-1px:focus padding: 1px; focus:p-neg-100px to focus:p-100px hover:p- size hover :p-1px:focus padding: 1px; hover:p-neg-100px to hover:p-100px omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used - for example use hover:p-10px to only apply the p-10px utility on hover html div class=p-50px hover:p-20px p-50px div responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example - - sm: 0px - 480px sm:p-10px md: 480px - 768px md:p-10px lg: 768px - 1080px lg:p-10px omencss media queries can also be combined with active focus and hover states for example use sm:p-10px to apply the p-10px utility at only small screen sizes at or below 480px or active:md:p-10px to apply the p-10px utility at only between small screen sizes 480px and medium screen sizes 768px 1 the structure is as follows: active focus hover : media query :p- size executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss states spoken example active:p- size focus:p- size hover:p- size active padding focus padding hover padding active:sm:p- size focus:sm:p- size hover:sm:p- size active small screens padding focus small screens padding hover small screens padding active:md:p- size focus:md:p- size hover:md:p- size active medium screens padding focus medium screens padding hover medium screens padding active:lg:p- size focus:lg:p- size hover:lg:p- size active large screens padding focus large screens padding hover large screens padding "}},{"slug":"how-to-delete-unused-css-classes","frontmatter":{"isBlog":true,"title":"how to delete unused css classes in 2022","date":"mar 06. 2022","excerpt":"make your website loading time 99% faster, by removing unused css classes with purgecss.","cover_image":"/images/blog/cover/remove.webp","category":"postbuild","author":"severin glaser","keywords":"purge css, remove css, development environement, post build","classNames":"","plainText":" this is a tutorial to remove unused omencss classes in vanilla html 5 it works for either your own css3 classes and or for omencss classes fact! omencss is massive this is quite ok in the development environment as soon as your code is released to the public you need to make the files as lightweight as possible for this reason you will be shown here how to properly reduce the file size lose weight with purgecss ! reduce file size images blog blogcontent lightweight-file-size webp?style=centerme the entire file was reduced by 99 4% march 2022 in this example all unused css classes are excluded as a result seo scores are improved user experience is enhanced and your website looks more professional as load times are kept to a minimum it is really easy and only takes a few minutes! in this example a simple html file is resized with purge css html !doctype html html lang=en class=sans head meta charset=utf-8 meta http-equiv=x-ua-compatible content=ie=edge meta name=viewport content=width=device-width initial-scale=1 0 title beautiful purgecss vs omencss file title link rel=stylesheet href= css omen css link rel=shortcut icon type=image x-icon href= favicon ico head body section class=flex min-h-100vh gradient-to-right from-red-5 to-orange-2 div class=m-auto reveal-down animate animation-forwards animation-delay-500ms h1 class=max-w-60rem font-800 text-80px text-black sm:text-purple sm:text-40px md:text-red md:text-60px a classy way to write css design h1 div section body html in summary there is a h1 header which has a black default colour and a font size of 80px on medium screens the font-size reduce to 60px and on small screens the font-size reduce to 40px omencss uses special characters for the responsive classes sm: md: lg: sm: hover: active: focus: this is a headache for most post-css libraries as they are designed for normal css classes for this reason purgecss is used in this example a node must be installeda and a package json file must be included in the root folder of your project you can easily create a package json by running npm init -y in the root folder npm npm i -d purgecss 1 save purgecss as a development dependency in your project 2 in a further step a purgecss config js must be created in the root directory of your project js purgecss config js module exports = content: 'src index html' css: 'src omencss css' defaultextractor: content = content match w- : + ? !: g output: 'css omen css' 1 as content enter all your html source files 2 in css import the default omencss css file 3 defaultextractor must be adopted like and copied this as the special regex are applied here 4 in output select your public folder where the lightweight css file should be saved 5 in the html file make sure that the correct css stylesheet is selected the path must be the same as entered in the output html link rel=stylesheet href= css omen css now it is time to reduce the css file via the command line for this you have to create a script in the package json file purgecss: purgecss --config purgecss config js json name: awesome-purging version: 1 0 0 description: main: index js scripts: purgecss: purgecss --config purgecss config js keywords: author: license: isc devdependencies: purgecss: ^4 1 3 you can now purge your css infinitely enter the script npm run purgecss in the command line which takes a short moment until you get the output ⚠️ every time you change your css classes in the html file you have to purge again todo: add --watch for auto detecting changes "}},{"slug":"omencss-animations","frontmatter":{"isBlog":true,"title":"simplest way to add beautiful css animations in 2022","date":"feb 24. 2022","excerpt":"create simple, unique and professional looking css animations for your website.","cover_image":"/images/blog/cover/motion_qn0fvq.webp","category":"animation","author":"severin glaser","keywords":"animation, css animations, stagger animation, react, javascript","classNames":"","plainText":" in this tutorial we will show you how to use over 100 different animation types for your website - with one line of code! how to stagger css animations ok honestly! this hardly works without javascript for this reason a stagger effect will be demonstrated based on the mobile navigation bar in nextjs ! nav result images blog blogcontent mobile-nav edkd2s gif?style=centerme js const menu = title: 'home' path: ' ' title: 'brand' path: ' brand' title: 'blog' path: ' blog' ul classname='text-16px text-black flex justify-center items-center min-h-100per flex-col text-left' li menu map item index = return link key= index href= item path a style= textdecoration: 'none' cursor: 'pointer' h3 classname= p-20px clip-inset-in-top animate animation-forwards animation-delay- index + 1 1 00ms item title h3 a link li ul in summary we map over the menu function special attention should be paid to the h3 tag it contains all the classes for the animation js h3 classname= clip-inset-in-top animate animation-forwards animation-delay- index + 1 1 00ms item title h3 1 in total only 4 css classes are necessary for achieving this animation 2 clip-inset-in-top is the animation type 3 animate is the default omencss animation-duration property which lasts for 750ms 4 animation-forwards signifies that the animation should retain the current condition after completion 5 animation-delay- index + 1 1 00ms is the most important part for the stagger effect it is conditional and tied to the index the actual calculation takes place at this point index + 1 1 as a result each mapped element gets a different animation delay home has an animation-delay of 100ms brand has an animation-delay of 200ms and blog has an animation-delay of 300ms the different delays create a stagger effect a graphical overview for all animations can be found on the examples page docs animation example what exactly is a vanilla css animation? an animation represents a process which generates a moving frame for the viewer by creating and displaying individual sequences of pixels especially in web development animations can make the difference between a good and a perfect website however it should be used with caution because the boundary between perfect and too much may mean the complete opposite of what was originally intended cascading style sheets css animations usually consist of @keyframes and have different properties such as animation-name animation-duration animation-delay animation-iteration-count animation-direction animation-timing-function animation-fill-mode or animation if you use omencss you don't need to code anything omencss contains over 100 different css animations all of them are handmade a graphical overview of all animations can be found on the examples page docs animation example why you should use animations the collaboration of design and code plays an important role especially in web development nowadays a beautiful website is more or less easy to create however bringing a web application alive is more difficult the keyword for this process is animation animation originates from the latin verb animare and means as much as spirit life breath or simply to bring to life become dynamic make your beautiful website shine! "}},{"slug":"what-is-omencss","frontmatter":{"isBlog":true,"title":"what is omencss? - an animated dynamic css library","date":"feb 24. 2022","excerpt":"omencss - an elegant way to write css design. always free, for anyone with any framework.","cover_image":"/images/blog/cover/default-image-blog.webp","category":"information","author":"severin glaser","keywords":["omencss","tutorial","reference","guide","installation"],"classNames":"","plainText":" this article introduces omencss omencss is a class-based css library the primary focus is on responsive design as the credo is all screens first which stands in contrast to the common mobile first especially in the coming years the demand for multiple design solutions and the coverage for a wide range of devices will considerably increase while the most popular css libraries mainly specialize for javascript frameworks the intention of omencss is to be accessible for everybody this means that omencss will always be free and the source code is publicly available mit license since the library is built with scss omencss can be used on all frameworks like django flask react vue next nuxt laravel and even on vanilla html - just to name a few examples 1 omencss is responsive - write html design for smartphone tablet screenreader laptop desktop or 4k screens 2 omencss is dynamic - no additional library for animations is necessary all animations are already implemented examples can be viewed here https www omen design docs animation example 3 omencss is mit licensed the source code can be viewed here https github com se-gl omencss what exactly is omencss? for the completion of my bachelor thesis at code university in berlin in software development i decided to create a open source css library the principle as well as the usability should be as simple as possible in addition to the core library custom html elements are planned to be developed e g to provide animations on scroll or to create further reusable components as of february 2022 in addition a separate implementation of a purge function to exclude unnecessary css classes is planned the advantage is obvious the lighter your production website is the better the user experience and in turn the better your seo scores get started now do not be afraid start writing beautiful animated design in a new dimension shell npm i do you have any suggestions do you want to support me or do you want to report a bug do not hesitate to contact me mailto info@omencss dev "}}]
    