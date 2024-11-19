import React from 'react';
import { useData } from '../context/DataContext'; // Import the DataContext

const ReservationModal = ({ reservation, closeModal }) => {
  const { customers, setCustomers } = useData(); // Access customers and updater
  const {
    ReservationID,
    CustomerID,
    RoomNo,
    CheckInDate,
    CheckOutDate,
    Status,
    Room,
    Bill,
    Orders,
  } = reservation;

  const handleUpdateReservationStatus = (newStatus) => {
    // Update the reservation status
    const updatedCustomers = customers.map((customer) => {
      if (customer.CustomerID === CustomerID) {
        return {
          ...customer,
          Reservations: customer.Reservations.map((res) =>
            res.ReservationID === ReservationID
              ? { ...res, Status: newStatus }
              : res
          ),
        };
      }
      return customer;
    });

    setCustomers(updatedCustomers); // Update context state
    closeModal(); // Close modal after updating
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <h2>Reservation Details</h2>

        <div className="reservation-details">
          <div className="left-column">
            <div className="section customer-info">
              <h3>Customer Info</h3>
              <p><strong>Customer ID:</strong> {CustomerID}</p>
              <p><strong>Room No:</strong> {RoomNo}</p>
            </div>

            <div className="section reservation-info">
              <h3>Reservation Info</h3>
              <p><strong>Reservation ID:</strong> {ReservationID}</p>
              <p><strong>Check-In Date:</strong> {CheckInDate}</p>
              <p><strong>Check-Out Date:</strong> {CheckOutDate}</p>
              <p><strong>Status:</strong> {Status}</p>
              <button onClick={() => handleUpdateReservationStatus('Checked In')}>
                Check In
              </button>
              <button onClick={() => handleUpdateReservationStatus('Cancelled')}>
                Cancel Reservation
              </button>
            </div>

            <div className="section room-info">
              <h3>Room Details</h3>
              <p><strong>Category:</strong> {Room.Category}</p>
              <p><strong>Price per Night:</strong> ${Room.PricePerNight}</p>
            </div>
          </div>

          <div className="right-column">
            <div className="section bill-info">
              <h3>Bill Details</h3>
              <p><strong>Room Charges:</strong> ${Bill?.RoomCharges || 'N/A'}</p>
              <p><strong>Food Charges:</strong> ${Bill?.FoodCharges || 'N/A'}</p>
              <p><strong>Total Amount:</strong> ${Bill?.TotalAmount || 'N/A'}</p>
              <p><strong>Payment Status:</strong> {Bill?.Status || 'N/A'}</p>
              <p><strong>Payment Date:</strong> {Bill?.PaymentDate || 'N/A'}</p>
            </div>

            <div className="section order-info">
              <h3>Orders</h3>
              {Orders?.length > 0 ? (
                Orders.map((order) => (
                  <div key={order.OrderID}>
                    <p><strong>Order ID:</strong> {order.OrderID}</p>
                    <p><strong>Order Date:</strong> {order.OrderDate}</p>
                    <ul>
                      {order.Items.map((item, idx) => (
                        <li key={idx}>
                          {item.ItemName} (x{item.Quantity}) - ${item.Quantity * item.PricePerItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p>No orders placed</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
