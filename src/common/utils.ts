export function debounce(cb: any, ms = 300) {
  let timeout: NodeJS.Timeout

  return function (...args: any) {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      cb(...args)
    }, ms)
  }
}
