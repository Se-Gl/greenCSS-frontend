import ModernGrid from '../grid/ModernGrid'

export default function Cookies() {
  return (
    <div className='mb-100px' id='cookie-policy'>
      <ModernGrid
        header='Protect yourself - How to delete cookies from your computer'
        subheader='Privacy Policies should include information regarding a website`s use of cookies. Furthermore, out of fairness, it must be clarified how data can be deleted. That is why transparency is our credo.'
        imageBg='black'
        imageUrl='/images/terms/club-terms.webp'
        imageAlt='member terms of services'
      />
      <div className='bg-white px-25px py-50px rounded-50px shadow-small-gray'>
        <div className='mb-100px mx-auto max-w-60rem'>
          <h2>Privacy explained</h2>
          <p>
            Here are the keys for deleting cookies from modern web browsers. Cookies are not sent to us in any way. In
            general, greenCSS does not create custom user profiles and therefore does absolutely not use any trackers
            that can be traced back to you.
          </p>
        </div>
        <div className='m-auto grid gap-30px grid-col-2 sm:grid-col-1 md:grid-col-1'>
          <div className='col-span-1'>
            <h2>How to delete all cookies on Google Chrome [Windows]</h2>
            <ol>
              <li>Open the menu from the top right (three dots)</li>
              <li>Click Settings</li>
              <li>Click Privacy and security</li>
              <li>Click Clear browsing data</li>
              <li>Select &quot;Basic&quot; or &quot;Advanced&quot;</li>
              <li>Click Clear data</li>
            </ol>
          </div>
          <div className='col-span-1'>
            <h2>How to delete cookies on Edge [Windows]</h2>
            <ol>
              <li>Open the Menu (three dots)</li>
              <li>Click Settings</li>
              <li>Click Privacy and services</li>
              <li>Click Choose what to clear at the Clear browsing data</li>
              <li>Make your selection</li>
              <li>Click Clear now</li>
            </ol>
          </div>
          <div className='col-span-1'>
            <h2>How to delete cookies on Mozilla Firefox [Windows]</h2>
            <ol>
              <li>Click the Menu (three lines)</li>
              <li>Click Options</li>
              <li>Click Privacy & Security</li>
              <li>Head to the cookies and site data section</li>
              <li>Click clear data</li>
            </ol>
          </div>
          <div className='col-span-1'>
            <h2>How to delete cookies on Opera [Windows]</h2>
            <ol>
              <li>Click Settings</li>
              <li>Click Advanced</li>
              <li>Click Privacy & security</li>
              <li>Click Clear browsing data</li>
              <li>Click Clear data after selecting either Basic or Advanced</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
