import Link from 'next/link'
import PolicyHero from '../icon/Privacy/PolicyHero'
import SubSectionHero from '../reusable/SubSectionHero'

export default function Policy() {
  return (
    <div className='mb-100px' id='privacy-policy'>
      <SubSectionHero
        header='We use technology - in order to enhance user experience'
        subheader="We have nothing to hide. Privacy Policies are not only a useful legal document - it's a lifestyle. "
        illustration={<PolicyHero width='100%' height='100%' />}
      />
      <h1>Privacy Policy for omenCSS</h1>
      <p>
        The website is hosted on Vercel, it uses the Vercel analytics tool, Google analytics and additionally posthog -
        an open source project.
      </p>
      <p>
        At omenCSS, accessible from www.omencss.com, one of our main priorities is the privacy of our visitors. This
        Privacy Policy document contains types of information that is collected and recorded by omenCSS and how we use
        it.
      </p>
      <p>
        If you have additional questions or require more information about our Privacy Policy, do not hesitate to{' '}
        <Link href='/contact'>
          <a>contact us.</a>
        </Link>
      </p>
      <p>
        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards
        to the information that they shared and/or collect in omenCSS. This policy is not applicable to any information
        collected offline or via channels other than this website. Our Privacy Policy was created with the help of the{' '}
        <Link href='https://www.privacypolicygenerator.info'>
          <a target='_blank' rel='nofollow noopener noreferrer'>
            Free Privacy Policy Generator
          </a>
        </Link>
        .
      </p>
      <h2>Consent</h2>
      <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
      <h2>Information we collect</h2>
      <p>
        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be
        made clear to you at the point we ask you to provide your personal information.
      </p>
      <p>
        If you contact us directly, we may receive additional information about you such as your name, email address,
        phone number, the contents of the message and/or attachments you may send us, and any other information you may
        choose to provide.
      </p>
      <p>
        When you register for an Account, we may ask for your contact information, including items such as name, company
        name, address, email address, and telephone number.
      </p>
      <h2>How we use your information</h2>
      <p>We use the information we collect in various ways, including to:</p>
      <ol>
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>
          Communicate with you, either directly or through one of our partners, including for customer service, to
          provide you with updates and other information relating to the website, and for marketing and promotional
          purposes
        </li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ol>
      <h2>Log Files</h2>
      <p>
        omenCSS follows a standard procedure of using log files. These files log visitors when they visit websites. All
        hosting companies do this and a part of hosting service&apos;s analytics. The information collected by log files
        include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. These are not linked to any information that is
        personally identifiable. The purpose of the information is for analyzing trends, administering the site,
        tracking users&apos; movement on the website, and gathering demographic information.
      </p>
      <h2>Cookies and Web Beacons</h2>
      <p>
        omenCSS uses &apos;cookies&apos; in order to provide the best user experiance. These cookies are used to store
        information including visitor&apos;s preferences, and the pages on the website that the visitor accessed or
        visited. The information is used to optimize the user&apos;s experience by customizing our web page content
        based on visitors&apos; browser type and/or other information.
      </p>
      <p>
        For more general information on cookies, please read{' '}
        <Link href='/privacy/cookies'>
          <a>the Cookies article on Generate Privacy Policy website</a>
        </Link>
        .
      </p>
      <h2>Advertising Partners Privacy Policies</h2>
      <p>You may consult this list to find the Privacy Policy for each of the advertising partners of omenCSS.</p>
      <p>
        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used
        in their respective advertisements and links that appear on omenCSS, which are sent directly to user&apos;s
        browser. They automatically receive your IP address when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on
        websites that you visit.
      </p>
      <p>Note that omenCSS has no access to or control over these cookies that are used by third-party advertisers.</p>
      <h2>Third Party Privacy Policies</h2>
      <p>
        omenCSS&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to
        consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may
        include their practices and instructions about how to opt-out of certain options.{' '}
      </p>
      <p>
        You can choose to disable cookies through your individual browser options. To know more detailed information
        about cookie management with specific web browsers, it can be found at the browser&apos;s respective websites.
      </p>
      <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
      <p>Under the CCPA, among other rights, California consumers have the right to:</p>
      <p>
        Request that a business that collects a consumer&apos;s personal data disclose the categories and specific
        pieces of personal data that a business has collected about consumers.
      </p>
      <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
      <p>
        Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.
      </p>
      <p>
        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
        please contact us.
      </p>
      <h2>GDPR Data Protection Rights</h2>
      <p>
        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to
        the following:
      </p>
      <p>
        The right to access – You have the right to request copies of your personal data. We may charge you a small fee
        for this service.
      </p>
      <p>
        The right to rectification – You have the right to request that we correct any information you believe is
        inaccurate. You also have the right to request that we complete the information you believe is incomplete.
      </p>
      <p>
        The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
      </p>
      <p>
        The right to restrict processing – You have the right to request that we restrict the processing of your
        personal data, under certain conditions.
      </p>
      <p>
        The right to object to processing – You have the right to object to our processing of your personal data, under
        certain conditions.
      </p>
      <p>
        The right to data portability – You have the right to request that we transfer the data that we have collected
        to another organization, or directly to you, under certain conditions.
      </p>
      <p>
        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
        please contact us.
      </p>
      <h2>Children&apos;s Information</h2>
      <p>
        Another part of our priority is adding protection for children while using the internet. We encourage parents
        and guardians to observe, participate in, and/or monitor and guide their online activity.
      </p>
      <p>
        omenCSS does not knowingly collect any Personal Identifiable Information from children under the age of 13. If
        you think that your child provided this kind of information on our website, we strongly encourage you to contact
        us immediately and we will do our best efforts to promptly remove such information from our records.
      </p>
    </div>
  )
}
