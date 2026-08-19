/**
 * Creates a debounced version of a function with per-argument caching.
 *
 * - Leading edge: the first call with a given set of arguments executes
 *   immediately, so callers that need an immediate result still get one.
 * - Repeated calls with the same arguments within the wait window return
 *   the cached result, preventing expensive operations (like gl.readPixels)
 *   from running on every mousemove/scroll tick.
 * - Calls with different arguments always execute immediately, so callers
 *   that sample multiple distinct points (e.g. contrast sampling across an
 *   element) still get correct per-point results.
 *
 * @param {Function} fn - The function to debounce
 * @param {number} wait - Debounce delay in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(fn, wait = 50) {
  const cache = new Map()
  let timer = null

  const argsKey = (args) => {
    try {
      return JSON.stringify(args)
    } catch {
      return String(args)
    }
  }

  const debounced = (...args) => {
    const key = argsKey(args)

    // If we have a cached result for these exact arguments, return it
    if (cache.has(key)) {
      return cache.get(key)
    }

    // Execute immediately and cache the result
    const result = fn(...args)
    cache.set(key, result)

    // Start/reset the debounce window
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      cache.clear()
      timer = null
    }, wait)

    return result
  }

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    cache.clear()
  }

  return debounced
}