import axios from "axios";
let url = "https://reqres.in/api/users/";
const promiseObj = axios.get(url);

promiseObj.then((resData) => {
  console.log(resData.data);
});
