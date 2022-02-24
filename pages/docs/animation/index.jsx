import HandCrafted from '@/components/icon/Animation/Handcrafted'
import { LinkButton } from '@/components/reusable/Button'
import Layout from '@/components/reusable/Layout'

export default function AnimationIndexPage() {
  return (
    <div className='overflow-x-hidden'>
      <Layout
        className='flex container sm:px-10px md:px-25px lg:px-50px min-h-100vh'
        title='Handmade, crafted animations by omenCSS'
        description='The collaboration of design and code plays an important role, especially in web development. Check the full selection, including animation examples.'
        url='docs/animation'
        keywords='Animation, handmade css animation, reusable animation, omen css'>
        <div className='mt-10rem min-w-100per relative' id='animation-main'>
          <div className='flex'>
            <div className='mr-auto hidden'></div>
            <div className='ml-auto'>
              <LinkButton href='/docs/animation/example' id='visit-animation-examples-1'>
                Examples
              </LinkButton>
            </div>
          </div>
          <div className='m-auto max-w-50rem'>
            <h1>Handmade, crafted animations</h1>
            <HandCrafted />
            <p>
              The collaboration of design and code plays an important role, especially in web development. Nowadays, a
              beautiful website is more or less easy to create. However, bringing a web application alive is more
              difficult. The keyword for this process is &quot;animation&quot;. Animation originates from the latin verb
              &quot;animare&quot; and means as much as spirit, life, breath or simply to bring to life.
            </p>
            <p>To see the full selection, including animation examples, proceed by clicking on the button below.</p>
            <LinkButton className='my-50px' href='/docs/animation/example' id='visit-examples-2'>
              Examples
            </LinkButton>
          </div>
        </div>
      </Layout>
    </div>
  )
}
