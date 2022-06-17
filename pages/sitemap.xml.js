import { NEXT_URL, NODE_ENV } from '@/config/index'

const Sitemap = () => {}

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: `${NEXT_URL}`,
    production: `${NEXT_URL}`
  }[NODE_ENV]

  const staticSlug = [
    'about',
    'brand',
    'brand/logo',
    'brand/typography',
    'brand/colours',
    'brand/composition',
    'blog',
    'contact',
    'docs',
    'privacy/cookies',
    'privacy/privacy-policy',
    'privacy/legal',
    'privacy/terms',
    'examples',
    'examples/hero',
    'examples/animation',
    'stripe/success',
    'stripe/cancel',
    'member',
    'auth/password/forgot-password'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticSlug
        .map((slug) => {
          return `
            <url>
              <loc>${baseUrl}/${slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}
        
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap
