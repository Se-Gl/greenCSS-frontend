export const navmenu = [
  { title: 'blog', path: '/blog' },
  { title: 'docs', path: '/docs' },
  { title: 'about', path: '/about' }
]

export const mobileBrandMenu = [
  { label: 'logo', url: '/brand/logo' },
  { label: 'typography', url: '/brand/typography' },
  { label: 'colours', url: '/brand/colours' },
  { label: 'composition', url: '/brand/composition' }
]

export const mobileDocsMenu = [
  { label: 'activate', url: '/docs/category/activate', title: 'Subcategory' },
  { label: 'animation', url: '/docs/category/animation' },
  {
    label: 'background',
    url: '/docs/category/background'
  },
  { label: 'border', url: '/docs/category/border' },
  { label: 'effects', url: '/docs/category/effects' },
  { label: 'filter', url: '/docs/category/filter' },
  { label: 'flexbox', url: '/docs/category/flexbox' },
  { label: 'grid', url: '/docs/category/grid' },
  { label: 'layout', url: '/docs/category/layout' },
  { label: 'sizing', url: '/docs/category/sizing' },
  { label: 'spacing', url: '/docs/category/spacing' },
  { label: 'tables', url: '/docs/category/tables' },
  { label: 'transform', url: '/docs/category/transform' },
  { label: 'typography', url: '/docs/category/typography' },
  { label: 'united', url: '/docs/category/united' }
]

export const mobileContactMenu = [
  { label: 'about', url: '/about' },
  { label: 'newsletter', url: '/contact#footer-social' },
  { label: 'Member', url: '/member/account' },
  { label: 'Subscription', url: '/member#member-plans' },
  { label: 'Login', url: '/member/account' }
]

export const navsublinks = [
  // TODO add dynamic blog posts
  {
    page: 'blog',
    pageLink: '/blog',
    subtext:
      'A Blog - the right way to write a story - Explore the blog posts, to learn more about the latest tips and tricks.'
  },
  {
    page: 'docs',
    pageLink: '/docs',
    subtext:
      'Docs - the right way to get to know the system - Get to know greenCSS and start writing sustainable webdesign.',
    links: [
      { label: 'activate', url: '/docs/category/activate' },
      { label: 'animation', url: '/docs/category/animation' },
      {
        label: 'background',
        url: '/docs/category/background'
      },
      { label: 'border', url: '/docs/category/border' },
      { label: 'effects', url: '/docs/category/effects' },
      { label: 'filter', url: '/docs/category/filter' },
      { label: 'flexbox', url: '/docs/category/flexbox' },
      { label: 'grid', url: '/docs/category/grid' },
      { label: 'layout', url: '/docs/category/layout' },
      { label: 'sizing', url: '/docs/category/sizing' },
      { label: 'spacing', url: '/docs/category/spacing' },
      { label: 'tables', url: '/docs/category/tables' },
      { label: 'transform', url: '/docs/category/transform' },
      { label: 'typography', url: '/docs/category/typography' },
      { label: 'united', url: '/docs/category/united' }
    ]
  },
  {
    page: 'about',
    pageLink: '/about',
    subtext: 'About greenCSS - the right way to get to know each other.',
    links: [
      { label: 'contact', url: '/contact' },
      { label: 'newsletter', url: '/contact#footer-social' }
    ],
    secondpage: 'brand',
    secondpageLink: '/brand',
    secondsubtext:
      'A Brand Book - the right way to get to know a story - Explore the logo, typography, colours and composition.',
    secondlinks: [
      { label: 'logo', url: '/brand/logo' },
      { label: 'typography', url: '/brand/typography' },
      { label: 'colours', url: '/brand/colours' },
      { label: 'composition', url: '/brand/composition' }
    ],

    thirdpage: 'member',
    thirdpageLink: '/member',
    thirdsubtext:
      'You want to do a favour for the world and yourself? Subscribe to a monthly subscription and we will minimise CO2 emissions in your area.',
    thirdlinks: [
      { label: 'Member', url: '/member/account' },
      { label: 'Subscription', url: '/member#member-plans' },
      { label: 'Login', url: '/member/account' }
    ]
  }
]
