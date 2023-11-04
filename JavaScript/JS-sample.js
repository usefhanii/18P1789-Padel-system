// Dummy data structure to store reservations
const reservations = [];

// Reservation function
function makeReservation(customerName, reservationDate, partySize) {
  const reservation = {
    customerName: customerName,
    reservationDate: reservationDate,
    partySize: partySize,
  };

  // Add the reservation to the reservations array
  reservations.push(reservation);

  return "Reservation made successfully!";
}

// Example usage:
const result = makeReservation("John Doe", "2023-11-10", 4);
console.log(result); // Output: "Reservation made successfully!"

// You can access the reservations array to see the reservations made
console.log(reservations);
