export function getOS() {
  if (typeof window !== 'undefined') {
    let userAgent = window.navigator.userAgent,
      platform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown',
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'Mac'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE', 'Win'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'MacOS'
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS'
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows'
    } else if (/Android/.test(userAgent)) {
      os = 'Android'
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux'
    }
    return os
  }
}
