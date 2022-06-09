import Checkmark from '../icon/Member/Checkmark'

export default function CheckInput({
  checkIsValid,
  checkIsValidTwo,
  checkIsValidThree,
  checkIsValidFour,
  text,
  secondText,
  thirdText,
  fourthText
}) {
  return (
    <div className='my-25px lg:my-0px md:my-0px sm:my-0px lg:pb-50px md:my-0px md:pb-50px sm:my-0px sm:pb-50px ml-25px sm:ml-0px md:ml-0px lg:ml-0px'>
      <div className='flex'>
        {checkIsValid && <Checkmark />}
        <p className={`mb-0px ml-5px text-15px ${checkIsValid ? 'text-greencss' : 'text-black-10'}`}>{text}</p>
      </div>
      {secondText && (
        <div className='flex'>
          {checkIsValidTwo ? <Checkmark /> : null}
          <p className={`mb-0px ml-5px text-15px ${checkIsValidTwo ? 'text-greencss' : 'text-black-10'}`}>
            {secondText}
          </p>
        </div>
      )}
      {thirdText && (
        <div className='flex'>
          {checkIsValidThree ? <Checkmark /> : null}
          <p className={`mb-0px ml-5px text-15px ${checkIsValidThree ? 'text-greencss' : 'text-black-10'}`}>
            {thirdText}
          </p>
        </div>
      )}
      {fourthText && (
        <div className='flex'>
          {checkIsValidFour ? <Checkmark /> : null}
          <p className={`mb-0px ml-5px text-15px ${checkIsValidFour ? 'text-greencss' : 'text-black-10'}`}>
            {fourthText}
          </p>
        </div>
      )}
    </div>
  )
}
