import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI(true);
console.log(response instanceof Promise);