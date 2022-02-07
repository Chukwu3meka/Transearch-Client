// sleep function
export const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time * 60 * 60));

// make values in an array unique
export const uniqueArray = (arr) => arr.filter((value, index, self) => self.indexOf(value) === index);

// get random valuesbetween two numbers
export const range = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

export const fetcher = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: data,
    credentials: "same-origin",
  }).then((res) => res.json());
};
