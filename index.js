/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 *
 * @param {function} fn  function you want to debounce
 * @param {number} wait interval wait in ms
 */

const debounce = (fn, wait = 0, _interval) => (...args) => {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function');
  }

  if (typeof wait !== 'number') {
    throw new TypeError('Expected a number');
  }

  clearTimeout(_interval);
  const _args = Object.assign({}, ...args);
  _interval = setTimeout(() => {
    fn(_args);
  }, wait);
};

export default debounce;
