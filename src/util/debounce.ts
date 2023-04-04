export const debounce = (fun: any, delay = 500) => {
  let timeout: number;
  return (...args: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fun.call(null, ...args);
    }, delay);
  };
};
