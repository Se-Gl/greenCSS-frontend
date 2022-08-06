import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import remarkGfm from 'remark-gfm'
import { FastAverageColor } from 'fast-average-color'
import { BackButton } from '@/components/reusable/Button'
import Loader from '@/components/logo/Loader'
import { HeadingRenderer, LinkRenderer, CodeRenderer, ImageRenderer } from '@/utils/ElementRenderer'
import AuthorInformation from '../blog/AuthorInformation'

const ReactMarkdown = dynamic(() => import('react-markdown').then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className='flex h-100per w-100per overflow-hidden'>
      <div className='m-auto'>
        <Loader />
      </div>
    </div>
  )
})
const Toc = dynamic(() => import('../toc/Toc'))

export default function SlugComponent({
  title,
  excerpt,
  date,
  category,
  cover_image,
  author,
  authorImage,
  content,
  slug,
  isBlog
}) {
  const [shadow, setShadow] = useState('')
  const fac = new FastAverageColor()

  fac
    .getColorAsync(cover_image, {
      ignoredColor: [[255, 0, 100, 255, 5]]
    })
    .then((color) => {
      setShadow(color.hex)
    })
    .catch((e) => {
      console.log(e)
    })

  return (
    <>
      <div className='mb-10rem min-w-100per relative' id={`blog-${slug}`}>
        <div className='flex justify-between sm:mb-50px md:mb-50px'>
          <BackButton>Back</BackButton>
        </div>
        <div className='m-auto max-w-75rem mb-10rem'>
          <div className='my-5rem'>
            <p className='text-greencss font-600 text-15px mb-0px'>{category}</p>
            <h1 className='font-900 mb-15px'>{title}</h1>
            {isBlog && <AuthorInformation authorImage={authorImage} author={author} date={date} content={content} />}
            <h2 className='text-20px font-normal'>{excerpt}</h2>
          </div>
          {isBlog === false ? null : (
            <div
              className='relative h-50rem rounded-20px overflow-hidden mb-50px'
              style={{ boxShadow: `5px 5px 10px -1px ${shadow}` }}>
              <Image
                quality={80}
                layout='fill'
                objectFit='cover'
                src={cover_image}
                alt={title}
                placeholder='blur'
                blurDataURL={`/_next/image?url=${cover_image}&w=16&q=1`}
              />
            </div>
          )}

          <Toc markdownText={content} isBlog={true} />
          {/*  eslint-disable  */}
          <ReactMarkdown
            children={content}
            components={{
              a: LinkRenderer,
              h2: HeadingRenderer,
              h3: HeadingRenderer,
              code: CodeRenderer,
              p: ImageRenderer
            }}
            remarkPlugins={[remarkGfm]}
          />
          {/* eslint-enable */}
        </div>
      </div>
    </>
  )
}
