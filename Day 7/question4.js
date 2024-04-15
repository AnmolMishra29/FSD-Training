import axios from "axios";

const fetchdata = async () => {
  try {
    const response = await axios.get(
      "https://www.w3schools.com/angular/customers.php"
    );
    //console.log(response.data);
    const customer = response.data.records;
    const requiredCustomer = customer.filter(
      (cust) => cust.Country == country_name
    );
    return requiredCustomer;
  } catch (error) {
    console.log(error);
  }
};
fetchdata();
