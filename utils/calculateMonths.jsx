export function calculateMonths(date1, date2, amount) {
  const secondDiff = date2 - date1

  function checkMonths(seconds) {
    seconds = Number(seconds)
    let m = Math.floor(seconds / ((60 * 60 * 24 * 365) / 13))
    let checkM = m >= 1 ? m : m - 1
    return checkM
  }
  return checkMonths(secondDiff) * amount
}
