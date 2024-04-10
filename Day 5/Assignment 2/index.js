//import { getBrowserHistoryStack } from "./stackEg.js";
//import { getCustomerRequestQueue } from "./stackEg.js";
import {
  getBrowserHistoryStack,
  getCustomerRequestQueue,
} from "./stackAndQueue.js";

console.log("------------Queue---------------");
getCustomerRequestQueue();
console.log("---------Stack---------------");
getBrowserHistoryStack();
