import { useState } from 'react'
import { handleShowToast, Toast } from 'codn'
import { GreenButton } from '../reusable/Button'

export default function Newsletter() {
  const [mail, setMail] = useState('')
  const [loading, setLoading] = useState(false)
  // toast
  const [toastList, setToastList] = useState([])

  const emailRegex = /\S+@\S+\.\S+/

  const subscribe = () => {
    if (emailRegex.test(mail)) {
      setLoading(true)
      fetch('api/newsletter', {
        method: 'PUT',
        headers: { 'content-type': 'application/json', authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
        body: JSON.stringify({
          mail: mail
        })
      }).then((result) => {
        if (result.status === 200) {
          handleShowToast(
            'success',
            'Success',
            '🙏 Thank you! Your email has been succesfully added to the mailing list.',
            setToastList
          )
        } else {
          handleShowToast(
            'error',
            'Error',
            '⚡ Oops! There was a problem with your subscription, please try again or contact us.',
            setToastList
          )
          setLoading(false)
        }
      })
    } else {
      handleShowToast('error', 'Error', '⚡ Please provide a valid email.', setToastList)
    }
  }

  return (
    <>
      <Toast toastList={toastList} setToastList={setToastList} duration={10000} position='top-right' />
      <div className='mt-25px'>
        {!loading ? (
          <form onSubmit={subscribe}>
            <input
              required
              onChange={(e) => {
                setMail(e.target.value)
              }}
              maxLength='30'
              type='email'
              id='email'
              placeholder='Your E-Mail'
              className='border-none text-15px text-white bg-black-3 rounded-5px p-10px w-100per'></input>

            <GreenButton type='submit' isDefault={false} isReverse={true} className='px-0px mt-25px mx-0px'>
              Subscribe
            </GreenButton>
          </form>
        ) : (
          <p className='text-15px text-black-10'>Thank you for your subscription.</p>
        )}
      </div>
    </>
  )
}
