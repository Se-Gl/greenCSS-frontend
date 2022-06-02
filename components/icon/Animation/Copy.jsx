import { useToast } from '@/components/toast/hooks/useToast'

function CopyIcon({
  width = '30',
  height = '30',
  copy,
  className = 'fill-black-10 hover:fill-white transition-all transition-duration-500ms'
}) {
  const toast = useToast()

  const copyContent = JSON.stringify(copy).replace(/\"/g, '')

  const handleToast = () => {
    toast('success', `🚀 ${copyContent.slice(0, 20)}... has been copied to clipboard`)
    navigator.clipboard.writeText(copyContent)
  }

  return (
    <svg
      id='copy-animation-to-clipboard'
      className='mt-5px mr-5px'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 40 40'
      onClick={handleToast}>
      <mask id='path-1-inside-1_267_2028' fill='#fff'>
        <path d='M0 5a5 5 0 015-5h30a5 5 0 015 5v30a5 5 0 01-5 5H5a5 5 0 01-5-5V5z'></path>
      </mask>
      <path
        className={className}
        fillOpacity='0.5'
        d='M0 5a5 5 0 015-5h30a5 5 0 015 5v30a5 5 0 01-5 5H5a5 5 0 01-5-5V5z'></path>
      <path
        fill='#101010'
        d='M20 10a1 1 0 011 1v10.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L19 21.586V11a1 1 0 011-1zm-7 15a1 1 0 011 1v2h12v-2a1 1 0 112 0v2a2 2 0 01-2 2H14a2 2 0 01-2-2v-2a1 1 0 011-1z'></path>
      <path
        fill='#FDFDFD'
        d='M0 5a6 6 0 016-6h28a6 6 0 016 6c0-2.21-2.239-4-5-4H5C2.239 1 0 2.79 0 5zm40 35H0h40zM0 40V0v40zM40 0v40V0z'
        mask='url(#path-1-inside-1_267_2028)'></path>
    </svg>
  )
}

export default CopyIcon
