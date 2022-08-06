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
        <p className={`mb-0px text-10px ${checkIsValid ? 'text-greencss' : 'text-gray'}`}>{text}</p>
      </div>
      {secondText && (
        <div className='flex'>
          {checkIsValidTwo ? <Checkmark /> : null}
          <p className={`mb-0px text-10px ${checkIsValidTwo ? 'text-greencss' : 'text-gray'}`}>{secondText}</p>
        </div>
      )}
      {thirdText && (
        <div className='flex'>
          {checkIsValidThree ? <Checkmark /> : null}
          <p className={`mb-0px text-10px ${checkIsValidThree ? 'text-greencss' : 'text-gray'}`}>{thirdText}</p>
        </div>
      )}
      {fourthText && (
        <div className='flex'>
          {checkIsValidFour ? <Checkmark /> : null}
          <p className={`mb-0px text-10px ${checkIsValidFour ? 'text-greencss' : 'text-gray'}`}>{fourthText}</p>
        </div>
      )}
    </div>
  )
}
