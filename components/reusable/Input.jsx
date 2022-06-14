export const Input = ({
  required,
  id,
  label,
  value,
  setValue,
  htmlFor,
  maxLength,
  type = 'text',
  isTextArea = false,
  isCaptcha = false
}) => (
  <div className='relative my-25px'>
    <input
      required={required}
      id={id}
      maxLength={maxLength}
      type={type}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      className={`memberinput border-none bg-white rounded-10px shadow-small-gray pl-10px text-15px ${
        isTextArea ? 'h-75px overflow-hidden' : 'h-50px'
      } ${isCaptcha ? '' : 'w-40rem sm:max-w-75vw'}`}
    />
    <label
      className='placeholder-text pl-10px absolute top-0per right-0per bottom-0per left-0per flex items-center pointer-events-none w-100px h-50px'
      htmlFor={htmlFor}>
      <div className='membertext translate-0per transition-all transition-duration-300ms text-black-7 text-15px'>
        {label}
      </div>
    </label>
  </div>
)
