import { GreenButton } from '../reusable/Button'
import SignupModal from './SignupModal'

export default function UserModal({
  buttonText,
  showModal,
  setShowModal,
  buttonStyle = 'ml-auto bg-gray-9 border-none hover:border-solid'
}) {
  return (
    <>
      <GreenButton
        id='member-button'
        className={buttonStyle}
        isOutline={true}
        isDefault={false}
        onClick={() => setShowModal(true)}>
        {buttonText}
      </GreenButton>
      <SignupModal showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}
