import axios from "axios";

const fetchData = async ({ country }) => {
  try {
    const response = await axios.get(
      "https://www.w3schools.com/angular/customers.php"
    );
    const customerarr = response.data.records;
    const customers = customerarr.filter(
      (customer) => customer.Country === country
    );
    return customers;
  } catch (error) {
    console.error("Error fetching customer data:", error.message);
    throw new Error("Failed to fetch customer data");
  }
};

const response = async () => {
  try {
    const customers = await fetchData("Mexico");
    console.log("Customers from Mexico:", customers);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

response();
