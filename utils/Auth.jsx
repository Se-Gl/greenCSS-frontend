export const forgotPassword = (email) => {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/forgot-password`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const resetPassword = (resetInfo) => {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/reset-password`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resetInfo)
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
