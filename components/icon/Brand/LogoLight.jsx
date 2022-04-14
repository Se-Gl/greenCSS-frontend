function LogoLight({ width = '400', height = '400' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 400 400'>
      <rect width='400' height='400' fill='#FDFDFD' rx='50'></rect>
      <g fill='#80F906' fillRule='evenodd' clipPath='url(#clip0_1_1144)' clipRule='evenodd'>
        <path d='M75 349.999c88.77-7.754 136.688-49.934 212.661-183.621 0 0-100.486 187.4-201.729 173.846L75 349.999z'></path>
        <path d='M324.5 50c-24.999 61.938-74.164 104.794-111.11 138.434-18.474 16.82-34.729 32.98-44.172 52.646-9.443 19.667-11.684 43.669-2.897 73.579l6.523 1.202s-.692-3.869-.85-4.426c9.118 1.505 44.241 4.288 78.921-23.114C291.112 256.562 329.32 191.594 324.5 50zm-5.786 14.76c1.251 128.808-34.984 190.176-71.792 219.261-35.393 27.964-69.932 26.615-75.359 26.229-7.8-27.921-5.417-48.824 3.261-66.894 8.89-18.515 24.517-34.193 42.868-50.901 33.857-30.825 76.795-65.194 101.028-127.691l-.006-.004z'></path>
      </g>
      <defs>
        <clipPath id='clip0_1_1144'>
          <path fill='#FDFDFD' d='M0 0H250V300H0z' transform='translate(75 50)'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default LogoLight
