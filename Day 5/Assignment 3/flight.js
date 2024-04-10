// Flight details stored in a Map
const flightDetails = new Map([
  [
    "AR456",
    {
      source: "Hyderabad",
      destination: "Bangalore",
      date: "2024-04-10",
      time: "18:00",
    },
  ],
  [
    "XY789",
    {
      source: "Chennai",
      destination: "Delhi",
      date: "2024-04-11",
      time: "09:30",
    },
  ],
  [
    "AB123",
    {
      source: "Mumbai",
      destination: "Kolkata",
      date: "2024-04-09",
      time: "14:45",
    },
  ],
]);

// Function to find the status of the flight
function findFlightStatus(flightNumber) {
  if (flightDetails.has(flightNumber)) {
    const flight = flightDetails.get(flightNumber);
    const currentTime = new Date();
    const flightDateTime = new Date(`${flight.date} ${flight.time}`);
    if (flightDateTime <= currentTime) {
      console.log(`The Flight ${flightNumber} has already left.`);
    } else {
      console.log(
        `The Flight ${flightNumber} is leaving at ${flight.time} from ${flight.source} to ${flight.destination}`
      );
    }
  } else {
    console.log(`Invalid flight number: ${flightNumber}`);
  }
}

// Input variable holding the flight number
const flightNumber = "AB123";

// Find the status of the flight
findFlightStatus(flightNumber);
