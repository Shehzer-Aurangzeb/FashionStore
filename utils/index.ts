export const fakeFetch = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 5 seconds");
    }, 1000);
  });
};
