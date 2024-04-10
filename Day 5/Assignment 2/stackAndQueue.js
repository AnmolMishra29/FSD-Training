import { Stack } from "@datastructures-js/stack";
import { Queue } from "@datastructures-js/queue";

exports.getBrowserHistoryStack = () => {
  let browserHistoryStack = new Stack();
  let requestObj = {};

  requestObj = {
    userId: "1234AM",
    url: "https://example.com",
    dateTime: new Date(),
  };
  browserHistoryStack.push(requestObj);

  requestObj = {
    userId: "1234AM",
    url: "https://google.com",
    dateTime: new Date(),
  };
  browserHistoryStack.push(requestObj);

  requestObj = {
    userId: "1234AM",
    url: "https://facebook.com",
    dateTime: new Date(),
  };
  browserHistoryStack.push(requestObj);

  requestObj = {
    userId: "1234AM",
    url: "https://youtube.com",
    dateTime: new Date(),
  };
  browserHistoryStack.push(requestObj);

  console.log("Display all browser History:----------------------");
  for (let i = 0; i < browserHistoryStack.size(); i++) {
    console.log(browserHistoryStack.peek());
  }

  let firstStackItem = browserHistoryStack.peek();
  console.log("Display first History Object----------", firstStackItem);

  let deletedStackItem = browserHistoryStack.pop();
  console.log("Delete first History Object-------------", deletedStackItem);

  console.log(
    "Display all Browser History after deleting first item----------------------"
  );
  for (let i = 0; i < browserHistoryStack.size(); i++) {
    console.log(browserHistoryStack.peek());
  }
};

exports.getCustomerRequestQueue = () => {
  let customerRequestQueue = new Queue();
  let requestObj = {};

  requestObj = {
    name: "Sankalp",
    id: 1,
    contactNumber: "123456789",
    description: "Query about product",
    dateTime: new Date(),
  };
  customerRequestQueue.enqueue(requestObj);

  requestObj = {
    name: "Ayush",
    id: 2,
    contactNumber: "987654321",
    description: "Complaint about service",
    dateTime: new Date(),
  };
  customerRequestQueue.enqueue(requestObj);

  requestObj = {
    name: "Shadmaan",
    id: 3,
    contactNumber: "1234508765",
    description: "Complaint about product delivery",
    dateTime: new Date(),
  };
  customerRequestQueue.enqueue(requestObj);

  console.log("Display all Customer Requests----------------------");
  for (let i = 0; i < customerRequestQueue.size(); i++) {
    console.log(customerRequestQueue.front());
  }

  let firstQueueItem = customerRequestQueue.front();
  console.log("Display first Requests----------", firstQueueItem);

  let deletedQueueItem = customerRequestQueue.dequeue();
  console.log("Delete first Requests-------------", deletedQueueItem);

  console.log(
    "Display all Customer Requests after deleting first item----------------------"
  );
  for (let i = 0; i < customerRequestQueue.size(); i++) {
    console.log(customerRequestQueue.front());
  }
};
