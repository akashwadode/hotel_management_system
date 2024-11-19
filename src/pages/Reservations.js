import React, { useState } from 'react';
import ReservationModal from '../components/ReservationModal';
import reservationsData from '../data/customer_data.json';

const Reservations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  // Function to open modal with selected reservation data
  const openModal = (reservation) => {
    setSelectedReservation(reservation);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedReservation(null);
  };

  return (
    <div className="container">
      <h1>Reservations</h1>
      <table>
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Customer ID</th>
            <th>Room No</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {reservationsData.customers
            .flatMap((customer) =>
              customer.Reservations.map((reservation) => ({
                ...reservation,
                CustomerID: customer.CustomerID, // Add CustomerID to each reservation
              }))
            )
            .map((reservation) => (
              <tr key={reservation.ReservationID}>
                <td>{reservation.ReservationID}</td>
                <td>{reservation.CustomerID}</td> {/* Display the CustomerID */}
                <td>{reservation.RoomNo}</td>
                <td>{reservation.CheckInDate}</td>
                <td>{reservation.CheckOutDate}</td>
                <td>{reservation.Status}</td>
                <td>
                  <button onClick={() => openModal(reservation)}>Details</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {modalOpen && (
        <ReservationModal
          reservation={selectedReservation}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Reservations;
