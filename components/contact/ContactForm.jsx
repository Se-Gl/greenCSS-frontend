import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import { GreenButton } from '../reusable/Button'
import { useToast } from '@/components/toast/hooks/useToast'
import { Input } from '../reusable/Input'

const CaptchaComponent = dynamic(() => import('../captcha/CaptchaComponent'), { ssr: false })

export default function ContactForm() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  // captcha
  const [verifyCaptcha, setverifyCaptcha] = useState('')
  const [captcha, setCaptcha] = useState([])

  const toast = useToast()

  //   Form validation
  const [errors, setErrors] = useState({})

  //   Setting button text
  const [buttonText, setButtonText] = useState('Send')

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0 || subject.length <= 0 || message.length <= 0) {
      tempErrors['fullname' || 'subject' || 'message'] = true
      isValid = false
      toast('warning', '☝️ An error has occurred. Please check your input.')
    }
    if (verifyCaptcha != captcha) {
      isValid = false
      toast('warning', '🤔 Are you human? Please verify your captcha')
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      tempErrors['email'] = true
      isValid = false
      toast('warning', '☝️ Please provide a valid email address.')
    }

    setErrors({ ...tempErrors })
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('disabled')
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      const { error } = await res.json()
      if (error) {
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        toast('error', '⚡ Oops! Something went wrong, please try again later.')
        setButtonText('Send')
        // Reset form fields
        setFullname('')
        setEmail('')
        setMessage('')
        setSubject('')
        setverifyCaptcha('')
        return
      }
      setShowSuccessMessage(true)
      toast('success', '🙏 Thank you! Your Message has been delivered.')
      setShowFailureMessage(false)
      setButtonText('Send')
      // Reset form fields
      setFullname('')
      setEmail('')
      setMessage('')
      setSubject('')
      setverifyCaptcha('')
    }
  }

  const contactItems = [
    {
      htmlFor: 'fullname',
      label: 'Full name',
      maxLength: 30,
      type: 'text',
      value: fullname,
      onChange: setFullname
    },
    {
      htmlFor: 'email',
      label: 'E-mail',
      maxLength: 30,
      type: 'email',
      value: email,
      onChange: setEmail
    },
    {
      htmlFor: 'subject',
      label: 'Subject',
      maxLength: 30,
      type: 'text',
      value: subject,
      onChange: setSubject
    },
    {
      htmlFor: 'message',
      label: 'Message',
      maxLength: 500,
      type: 'textarea',
      value: message,
      onChange: setMessage,
      isTextArea: true
    }
  ]

  return (
    <div className='mt-50px m-auto grid grid-col-12 sm:grid-col-1 md:grid-col-1 overflow-hidden' id='contact-index'>
      <div className='mb-20px col-span-8 flex sm:mb-10rem md:mb-10rem'>
        <form
          className='bg-white rounded-left-radius-20px sm:rounded-top-radius-0px md:rounded-top-radius-0px sm:rounded-bottom-radius-20px md:rounded-bottom-radius-20px shadow-small-gray sm:shadow-transparent md:shadow-transparent'
          onSubmit={handleSubmit}
          id='contact-form'>
          <div className='px-20px flex flex-col'>
            <h3 className='pt-25px max-w-50per sm:max-w-100per md:max-w-100per'>
              Get in Touch with Us! And send a message
            </h3>
            <p className='text-black-10 text-15px  max-w-50per sm:max-w-100per md:max-w-100per'>
              Whether it is constructive feedback, negative experiences, gratitude, questions, suggestions, feature
              requests or simply boredom.
            </p>
            {contactItems.sort().map((item, index) => {
              return (
                <div key={index} className='w-100per'>
                  <Input
                    maxLength={item.maxLength}
                    id={item.htmlFor}
                    label={item.label}
                    type={item.type}
                    value={item.value}
                    setValue={item.onChange}
                    htmlFor={item.htmlFor}
                    isTextArea={item.isTextArea}
                  />
                </div>
              )
            })}

            <CaptchaComponent
              verifyCaptcha={verifyCaptcha}
              setverifyCaptcha={setverifyCaptcha}
              captcha={captcha}
              setCaptcha={setCaptcha}
            />

            {buttonText == 'Send' && (
              <div className='sm:mr-auto md:mr-auto my-25px'>
                <GreenButton type='submit' id='submit-button'>
                  {buttonText}
                </GreenButton>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className='mb-20px sm:mb-0px md:mb-0px col-span-4 sm:row-start-1 md:row-start-1 flex mx-0px bg-blue rounded-right-radius-20px sm:rounded-bottom-radius-0px md:rounded-bottom-radius-0px sm:rounded-top-radius-20px md:rounded-top-radius-20px'>
        <div className='relative h-100vh sm:h-50vh md:h-50vh w-100per overflow-hidden'>
          <Image
            quality={100}
            layout='fill'
            objectFit='contain'
            src='/images/contact/jungle-contact.webp'
            alt='greenCSS 3D nature'
            placeholder='blur'
            blurDataURL='/_next/image?url=/images/contact/jungle-contact.webp&w=16&q=1'
          />
        </div>
      </div>
    </div>
  )
}
