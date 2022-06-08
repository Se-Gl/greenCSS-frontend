const MemberInput = ({ label, value, setValue, type = 'text' }) => (
  <div className='relative my-50px'>
    <input
      type={type}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      className='memberinput h-50px w-40rem border-none bg-white rounded-10px shadow-small-gray pl-10px text-15px'
    />
    <label className='placeholder-text pl-10px absolute top-0per right-0per bottom-0per left-0per flex items-center pointer-events-none'>
      <div className='membertext translate-0per transition-all transition-duration-300ms text-black-7 text-15px'>
        {label}
      </div>
    </label>
  </div>
)

export default MemberInput
