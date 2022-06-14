import { Input } from '../reusable/Input'
import Captcha from './Captcha'

export default function CaptchaComponent({ verifyCaptcha, setverifyCaptcha, setCaptcha }) {
  return (
    <div className='flex min-h-50px'>
      <Captcha setWord={setCaptcha} />
      <div className='display-block w-100per min-w-50px'>
        <Input
          required='required'
          maxLength='30'
          type='password'
          id='password'
          label='Captcha'
          value={verifyCaptcha}
          setValue={setverifyCaptcha}
          htmlFor='captcha'
          isCaptcha={true}
        />
      </div>
    </div>
  )
}
