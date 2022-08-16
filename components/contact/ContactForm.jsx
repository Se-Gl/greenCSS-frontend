import { useState } from 'react'
import { Input, TextArea, Captcha, handleShowToast, Toast } from 'codn'
import { GreenButton } from '../reusable/Button'
import CheckValidInput from '../member/CheckValidInput'
import ModernGrid from '../grid/ModernGrid'
import { checkNumber, checkValidEmail } from '@/data/validation'

export default function ContactForm() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // toast
  const [toastList, setToastList] = useState([])

  // submit
  const [submit, setSubmit] = useState(false)

  // captcha
  const [verifyCaptcha, setverifyCaptcha] = useState('')
  const [captcha, setCaptcha] = useState([])

  //   Form validation
  const [errors, setErrors] = useState({})

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0 || subject.length <= 0 || message.length <= 0) {
      tempErrors['fullname' || 'subject' || 'message'] = true
      isValid = false
      handleShowToast('warning', 'Warning', '☝️ An error has occurred. Please check your input.', setToastList)
    }
    if (verifyCaptcha != captcha) {
      isValid = false
      handleShowToast('warning', 'Warning', '🤔 Are you human? Please verify your captcha', setToastList)
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      tempErrors['email'] = true
      isValid = false
      handleShowToast('warning', 'Warning', '☝️ Please provide a valid email address.', setToastList)
    }

    setErrors({ ...tempErrors })
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmit(true)
    let isValidForm = handleValidation()

    if (isValidForm) {
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
        handleShowToast('error', 'Warning', '⚡ Oops! Something went wrong, please try again later.', setToastList)
        setSubmit(false)
        return
      }
      setShowSuccessMessage(true)
      handleShowToast('success', 'Success', '🙏 Thank you! Your Message has been delivered.', setToastList)
      setShowFailureMessage(false)
      // Reset form fields
      setFullname('')
      setEmail('')
      setMessage('')
      setSubject('')
      setverifyCaptcha('')
      setSubmit(false)
    }
  }

  const contactItems = [
    {
      htmlFor: 'fullname',
      label: 'Full name',
      maxLength: 32,
      type: 'text',
      value: fullname,
      onChange: setFullname,
      checkFirst: checkNumber(fullname, 3, 32),
      checkFirstDescription: 'Your name'
    },
    {
      htmlFor: 'email',
      label: 'E-mail',
      maxLength: 32,
      type: 'email',
      value: email,
      onChange: setEmail,
      checkFirst: checkValidEmail(email),
      checkFirstDescription: 'Your E-Mail'
    },
    {
      htmlFor: 'subject',
      label: 'Subject',
      maxLength: 64,
      type: 'text',
      value: subject,
      onChange: setSubject,
      checkFirst: checkNumber(subject, 3, 64),
      checkFirstDescription: '3-64 characters'
    }
  ]

  let checkIsDisabled =
    checkNumber(fullname, 3, 32) && checkValidEmail(email) && checkNumber(subject, 3, 64) && verifyCaptcha === captcha

  return (
    <ModernGrid
      id='contact-index'
      header='Get in Touch with Us! And send a message'
      subheader='Whether it is constructive feedback, negative experiences, gratitude, questions, suggestions, feature
      requests or simply boredom.'
      imageBg='blue'
      imageUrl='/images/contact/contact-hero.png'
      imageAlt='member section hero'>
      <Toast toastList={toastList} setToastList={setToastList} duration={10000} position='top-right' />
      <form className='my-auto' onSubmit={handleSubmit} id='contact-form'>
        <div className='flex flex-col'>
          {contactItems.sort().map((item, index) => {
            return (
              <div className='flex sm:block md:block lg:block' key={index}>
                <div className='w-100per min-w-35rem max-w-45rem'>
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
                <CheckValidInput checkIsValid={item.checkFirst} text={item.checkFirstDescription} />
              </div>
            )
          })}
          <div className='flex sm:block md:block lg:block'>
            <div className='w-100per min-w-35rem max-w-45rem'>
              <TextArea
                maxLength={500}
                id='message'
                label='Message'
                type='text'
                value={message}
                setValue={setMessage}
                htmlFor='message'
              />
            </div>
            <CheckValidInput checkIsValid={message.length >= 3 && message.length <= 500} text='Max 500 characters' />
          </div>

          <div className='flex sm:block md:block lg:block my-10px gap-25px'>
            <Captcha setWord={setCaptcha} />
            <div className='sm:my-25px'>
              <Input label='captcha' type='text' value={verifyCaptcha} setValue={setverifyCaptcha} htmlFor='captcha' />
            </div>
          </div>
          <div className='sm:mr-auto md:mr-auto my-25px'>
            <GreenButton
              type='submit'
              isdisabled={!checkIsDisabled || submit}
              id='submit-button'
              className={`text-15px font-400 ml-0px mt-25px ${
                !checkIsDisabled || submit ? 'cursor-not-allowed bg-gray-5 border-none' : ''
              }`}
              isOutline={true}
              isDefault={false}>
              Send
            </GreenButton>
          </div>
        </div>
      </form>
    </ModernGrid>
  )
}
