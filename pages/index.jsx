import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>
      <nav className='fixed h-40px flex justify-center items-center'>
        <div className='ml-10px'>
          <Image src='/omencss.svg' alt='OmenCSS Logo' width={100} height={20} id='logo' />
        </div>
      </nav>
      <main className='bg-dark min-h-100vh overflow-x-hidden'>
        <div className='relative min-h-100vh text-center z-2 flex justify-center items-center'>
          {/* TODO margin: 0, font size sm, md, lg */}
          <h1 className='inline-block leading-125 vertical-middle max-w-58rem font-900 text-87 hero-title'>
            Writing CSS reimagined
          </h1>
        </div>
        <div className='bubbles'>
          <div className='bubble' />
          <div className='bubble' />
          <div className='bubble' />
        </div>
      </main>
    </>
  )
}
