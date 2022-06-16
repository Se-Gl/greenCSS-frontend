export const checkNumber = (key, numberOne, numberTwo) => {
  return key.length >= numberOne || key.length > numberTwo
}

export const checkValidEmail = (key) => {
  return /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(
    key
  )
}

export const checkValidPassword = (key) => {
  return /\d/.test(key)
}

export const checkValidPasswordTwo = (key) => {
  return /\W|_/g.test(key)
}

export const checkValidPasswordThree = (key) => {
  return /(?=.*[A-Z])(?=.*[a-z])/.test(key)
}

export const checkRegionOrCountry = (key, keyTwo) => {
  return key || keyTwo != null
}
