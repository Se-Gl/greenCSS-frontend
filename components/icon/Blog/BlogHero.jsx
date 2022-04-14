function BlogHero({ width = '200', height = '200' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 200 200'
      id='blog-hero-illustration'>
      <path
        fill='#edfedb'
        fillRule='evenodd'
        d='M122.706 18.275c14.235 7.184 11.971 28.654 18.863 43.013 2.764 5.76 5.157 11.604 9.569 16.228 6.334 6.64 16.599 8.66 21.546 16.386 6.847 10.694 19.881 25.832 11.708 35.553-9.009 10.713-27.449-2.328-41.318-.337-7.503 1.077-12.901 7.891-20.368 9.192-8.34 1.454-17.937 3.465-24.934-1.296-7.018-4.776-5.173-16.063-10.399-22.747-6.461-8.266-18.436-11.074-23.303-20.365-6.086-11.619-12.207-25.832-7.261-37.98 4.871-11.967 20.254-15.104 31.485-21.52 11.188-6.393 22.907-21.933 34.412-16.127z'
        clipRule='evenodd'></path>
      <path
        fill='#80f906'
        d='M63.19 162l-16.54 2.78a15.842 15.842 0 01-18.26-12.94l-15.08-93L95.78 45a.19.19 0 00-.07-.37L13.25 58.48l-.68-4.2A15.84 15.84 0 0125.51 36L143.7 16.17a15.805 15.805 0 0111.836 2.663A15.825 15.825 0 01162 29.1l.7 4.29-56.53 9.49a.191.191 0 00-.135.056.192.192 0 000 .268.19.19 0 00.135.056c.1 0 .24 0 56.56-9.5l6.83 42.16.23-1L162.32 29a16.18 16.18 0 00-18.69-13.2L25.45 35.65A16.22 16.22 0 0012.2 54.34L28 151.91a16.22 16.22 0 0018.69 13.25l16.54-2.78a.19.19 0 10-.04-.38zM178.15 126.62l-8.09-49.9-.23 1 7.95 49a15.84 15.84 0 01-12.95 18.25L69.09 161a.191.191 0 00-.063.325.19.19 0 00.123.045l95.75-16.08a16.229 16.229 0 0013.25-18.67z'></path>
      <path
        fill='#80f906'
        d='M164.43 98.44l5-22.08-14.27.52-5.12 4.68c1.793.381 3.535.972 5.19 1.76a6.475 6.475 0 011.9 1.24c.78.89-3.39-.39-5.45-.61.407.227.781.51 1.11.84.53.6-1.72-.21-3.77-.55-.388-.1-.79-.134-1.19-.1 2 .89 5.05 2.58 5.78 3.88.88 1.58-3.62-1.55-6.53-1.64 1.85.86 3.86 2 4.59 3.37 1 1.8-2.58-1.49-6.84-1.63 4.07 2.46 6 4.49.2 2a10.19 10.19 0 00-3.35-.87l-11.6 10.62c36.92-1.45 34.32-1.3 34.35-1.43z'></path>
      <path fill='#80f906' d='M173.661 60.87l-8.45 37.21 21.2-22.42 8.44-37.16-21.19 22.37z'></path>
      <path
        fill='#bcfc7c'
        d='M72 119a10.997 10.997 0 01-15.5.83L37.78 103a25.91 25.91 0 0112.48-13.9l12.45 11.19c8.45-21.34 17.46-23 20.36-25.48 5.77 4.55 8.56 6.25 16.12 7.66-1.88 18.54-.89 40.07-3.81 52.28a17.86 17.86 0 01-4.06 7.73L78 157.32a29.606 29.606 0 01-14-12.5l12.63-14 3.07-20.43C104.058 83.27 96.07 92.16 72 119z'></path>
      <path
        fill='#101010'
        d='M157.439 84.37a6.866 6.866 0 00-2-1.29c-2.66-1.31-3.24-1.34-30.19-7.89l-7.59-6.3c.23-.93.17-1.53-.19-1.77-.1-.07.42.38-17-15.33-.339-2.427-.12-4.9.64-7.23 5.35 1.88 6.75-2.83 5.64-8.37a2.18 2.18 0 00.37-3.36 2.18 2.18 0 00-.17-3.78 2.187 2.187 0 00-1.26-3.53 2.163 2.163 0 00-.348-2.057 2.168 2.168 0 00-1.922-.813 2.172 2.172 0 00-.987-1.83 2.18 2.18 0 00-2.073-.17 2.183 2.183 0 00-1.542-1.493 2.191 2.191 0 00-2.078.543 2.3 2.3 0 00-3.93.19 2.19 2.19 0 00-3 .31 2.7 2.7 0 00-4-1.81 2.81 2.81 0 00-5.06.25 2.67 2.67 0 00-3.78 3 2.68 2.68 0 00-1.14 4.73A2.67 2.67 0 0077.35 31a2.68 2.68 0 004.08 2.61A2.62 2.62 0 0083.26 35 2.18 2.18 0 0085 37.46a2.181 2.181 0 002.29 2.86 2.19 2.19 0 003.08 2 2.18 2.18 0 003.63.91 3.46 3.46 0 001.83 1.07c-2.13 3.8-6.06 7.21-7.79 10.86-4.5 9.49-2.75 12.64-5.12 19.49-3.78 2.71-12 4.82-20.27 25.28L50.42 89a.21.21 0 00-.28 0 24.628 24.628 0 00-3.71 2.32c-6.31-5-6.81-5.14-11.93-10.73a.18.18 0 00-.17-.06C23.91 81.92 11.86 85.5 6.68 88a.18.18 0 000 .34 54.998 54.998 0 0024 3.43l8.59 7.72a27.66 27.66 0 00-1.56 3.18.571.571 0 00.15.66l18.5 16.62a11.18 11.18 0 0015.77-.84l7.32-8.15-3 19.76-12.4 13.82a.469.469 0 00-.06.56 34.946 34.946 0 002.11 3.13c-6.54 8-11.44 12.54-11.49 12.82-1.06 6.25-.55 20.48 1.45 27a.191.191 0 00.155.133.19.19 0 00.105-.015.184.184 0 00.08-.068c5.2-8.64 7.08-14 9.85-23.44l8.1-9a29.7 29.7 0 003.36 1.75.46.46 0 00.51-.11l13.24-14.74a18 18 0 004.1-7.81c2.9-12.14 2-33.92 3.81-52.26l1.9-3.43 2.52 2.13c.39.35 1.4-.11 1.95-.66l7.26 5.52a11.614 11.614 0 005.72 2.18c.23 0 23.13.71 26.23 2.06a11.55 11.55 0 003.5 1.16c.29 0 .34-.11.39-.19.28-.55-1.72-2-3.26-2.92 3.54.42 6 2.57 6.47 2 .16-.17 0-.47-.12-.73a9.262 9.262 0 00-3.68-3c2.2.51 4.66 2 5.42 2 .31 0 .5-.24.22-.73-.75-1.34-3-2.6-4.95-3.5 1.55.26 3.21.74 3.82.74.43 0 .52-.27.28-.55a3.493 3.493 0 00-.44-.41c1.54.27 3.62.81 4.44.81.58.03.66-.3.4-.6zm-40.61-17.32c-1.15.28-2.82 2.17-3.58 3.09l-.37-.33c0-.11.44-1.46-.19-1.86l-10.69-9.65a30.205 30.205 0 01-1.44-5.92l16.27 14.67zm-20.73-22.46c1.44-2.52 2.2-5.65.74-8.08a.16.16 0 00-.1-.08c-2.54-.84-1.5-3.78.19-2.63.6.42 1.39.81 1.57.09a1.27 1.27 0 01.36-.77 2.18 2.18 0 003.78-.18 2.18 2.18 0 002.73 0c1.21 2.94 2.25 8.77 0 10.9-1.2 1.11-3.12 1-5.72-.35-.12-.07-.36 0-.2.36.16.36.35.76.88 1.92a16.412 16.412 0 00-.37 4.37c-1.5 2.11-4.42-.19-6.32-2a28.768 28.768 0 002.46-3.55zm-64.68 47.3a35.295 35.295 0 016.28-7.44 90.595 90.595 0 008.42 7 26.461 26.461 0 00-6.65 7.64l-8.05-7.2zm34.68 72.39a33.865 33.865 0 01-7.24-7.2c2.73-2.94 5.26-5.84 7.45-8.51a31.488 31.488 0 007.69 6.94l-7.9 8.77zm29.1-29.61a17.658 17.658 0 01-4 7.65l-8.87 9.88a33.326 33.326 0 01-13.83-12c8.8-9.8 8.36-9.27 8.37-9.37l1.55-10.32L94.65 94a.19.19 0 00-.3-.22l-22.49 25a10.81 10.81 0 01-15.24.81l-14.48-13a43.588 43.588 0 015.47-7.86c17.52 13.87 16.34 13 16.44 13 .1 0-.17.4 17.17-25.07a18.998 18.998 0 006.55-3.24.19.19 0 00-.23-.3 19.93 19.93 0 01-12.65 3.92.19.19 0 000 .38 22.637 22.637 0 005.77-.62L64 111.28 47.86 98.49A31.5 31.5 0 0154.33 93l8.27 7.42a.181.181 0 00.234-.01.175.175 0 00.046-.07C71 80.1 79 77.9 83.06 75c5.53 4.35 8.4 6.16 15.92 7.59-1.85 18.41-.89 39.96-3.78 52.08zm8.31-54.2l-11.07-9.38a.19.19 0 00-.308.122.19.19 0 00.028.128c6.44 10 6.93 10.89 6.93 10.89-7.47-1.41-10.31-3.2-15.8-7.52 2.37-6.93.61-9.95 5.08-19.38 1.11-2.34 3.12-4.56 5-6.88 1.86 1.77 4.8 4.11 6.59 2.27a28.616 28.616 0 001.43 7.07l-6.55-5.88c-.18-.17-.43.11-.25.28l17.48 15.7c-2.61.65-8.73 9.58-8.56 12.58zm49.18 4.31c-.67 0-3.43-.82-5-.9a22.473 22.473 0 00-2.39-.85.189.189 0 00-.209.148.19.19 0 00.129.222c1.81.38 7.78 3 8.41 4.87a9.35 9.35 0 01-1.72-.65 15.045 15.045 0 00-4.75-1.47c-1.11-.52-2.08-.89-2.46-1a.191.191 0 00-.21.121.196.196 0 00-.001.129.195.195 0 00.081.1c2 .71 6.38 2.64 7.14 4.61-.81-.22-3.63-2.06-6.83-2.18l-.65-.39a.188.188 0 00-.144-.019.187.187 0 00-.134.233c.013.05.045.09.088.116 2.84 1.66 4.28 2.87 4.43 3.22-.16 0-.84 0-3.38-1.13-3.16-1.37-25.42-2.06-26.35-2.08a11.311 11.311 0 01-5.53-2.11l-9-6.87c1.1-3.21 4.59-8.28 7-10.08l9.15 8.18c.1.09-.8-.13 25.78 5.1 1.86.49 5.39 1.47 6.55 2.68zm-.86-1.08a28.65 28.65 0 00-5.59-2l-25.67-5-7-6.25a15.484 15.484 0 012.37-2.45l9.11 7.56s23.07 5.64 24.27 5.94a28.768 28.768 0 016 2 6.318 6.318 0 011.86 1.2c-.68.01-3.79-.83-5.35-1z'></path>
      <path
        fill='#80f906'
        d='M123.769 34.33a4.2 4.2 0 11.014-8.399 4.2 4.2 0 01-.014 8.4zm-3-6.36a3.706 3.706 0 00-.45 3.468 3.702 3.702 0 002.631 2.302 3.71 3.71 0 004.499-4.22 3.705 3.705 0 00-2.836-3 3.71 3.71 0 00-3.854 1.48l.01-.03zM134.531 32.55a4.2 4.2 0 114.15-4.89 4.188 4.188 0 01-2.38 4.506 4.188 4.188 0 01-1.77.384zm-3-6.36a3.72 3.72 0 00-.66 1.677 3.715 3.715 0 002.841 4.092 3.71 3.71 0 004.499-4.22 3.712 3.712 0 00-6.69-1.55h.01zM149.621 25.85a4.202 4.202 0 00-5.624-3.245 4.203 4.203 0 00-2.717 3.794 4.195 4.195 0 004.881 4.281 4.186 4.186 0 003.41-3.19 4.21 4.21 0 00.05-1.64zM37.89 20.56l-5-3.52 3.52-4.95a.19.19 0 00-.3-.22l-3.52 5-5-3.52c-.2-.15-.42.16-.22.31l5 3.51-3.52 5a.19.19 0 00.15.3c.15 0-.08.25 3.68-5 5.26 3.74 5 3.56 5.06 3.56a.247.247 0 00.15-.47zM31.55 114.31c-.13-.11 1.5-.66-24.36 7.73a.19.19 0 00-.06.32l6.87 6.09-9.12 10a.196.196 0 00-.056.135.189.189 0 00.057.135c5.32 4.68 5 4.45 5.08 4.45.08 0-.49.63 9.26-10.1l6.85 6.09a.19.19 0 00.31-.1c5.62-26.19 5.29-24.63 5.17-24.75zm-12.48 18.41l-9.12 10-4.68-4.12c9.82-10.81 9.17-10 9.16-10.18-.01-.18.4.28-6.81-6.12l14.73-4.73 3.36 20.81-6.38-5.68a.196.196 0 00-.133-.042.191.191 0 00-.127.062zM129.83 136.36c-.1 0-.09 0-14.76-4.56a.193.193 0 01-.077-.07.196.196 0 010-.2.193.193 0 01.077-.07l12.37-8.6a.194.194 0 01.13-.01.194.194 0 01.137.203.191.191 0 01-.057.117l-12 8.38 14.23 4.45a.178.178 0 01.12.07.2.2 0 01.031.064.188.188 0 01-.019.138.171.171 0 01-.047.053.19.19 0 01-.064.031.188.188 0 01-.071.004zM141.8 134.09l12-8.86-14.24-4a.198.198 0 01-.079-.025.194.194 0 01-.092-.133.19.19 0 01.044-.155.186.186 0 01.147-.066c.028 0 .055.007.08.019 10.7 2.84 13.65 3.69 14.45 4 .36.14.45.22.09.53-.67.55-3.15 2.37-12.15 9a.2.2 0 01-.323-.176.2.2 0 01.073-.134zM131.759 141.79l5.37-26.18a.192.192 0 01.22-.15.199.199 0 01.15.23l-5.37 26.18a.19.19 0 01-.221.13.195.195 0 01-.115-.076.189.189 0 01-.034-.134z'></path>
    </svg>
  )
}

export default BlogHero
