import axios from "axios";

const fetchdata = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users/");
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
};
fetchdata();
