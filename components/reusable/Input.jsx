import xss from 'xss'

export function Input({ required, id, label, value, setValue, htmlFor, maxLength, type = 'text', isCaptcha = false }) {
  let cleanValue = xss(value)

  return (
    <div className='relative my-25px'>
      <input
        required={required}
        id={id}
        maxLength={maxLength}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={cleanValue}
        className={`memberinput border-none bg-white rounded-10px shadow-small-gray pl-10px text-15px h-50px ${
          isCaptcha ? '' : 'w-40rem sm:w-100per md:w-100per'
        }`}
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
}

export function TextArea({ required, label, value, setValue, htmlFor, maxLength, type = 'text' }) {
  let cleanValue = xss(value)

  return (
    <div className='relative my-25px'>
      <div
        spellCheck='false'
        contentEditable='true'
        required={required}
        id='textarea'
        maxLength={maxLength}
        type={type}
        onInput={(e) => setValue(e.currentTarget.textContent)}
        value={cleanValue}
        className='membertextarea border-none bg-white rounded-10px shadow-small-gray pl-10px text-15px w-40rem sm:w-100per md:w-100per overflow-y-hidden p-5px'
        style={{ wordWrap: 'break-word' }}
      />

      <label
        className='placeholder-text-textarea pl-10px absolute top-0per right-0per bottom-0per left-0per flex items-center pointer-events-none w-100px h-50px'
        htmlFor={htmlFor}>
        <div className='membertext-textarea translate-0per transition-all transition-duration-300ms text-black-7 text-15px'>
          {label}
        </div>
      </label>
    </div>
  )
}
