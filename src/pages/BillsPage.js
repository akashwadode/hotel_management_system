import React, { useState } from 'react';
import ReservationModal from '../components/ReservationModal';
import PaymentModal from '../components/PaymentModal';
import reservationsData from '../data/customer_data.json';

const BillPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [currentSection, setCurrentSection] = useState('unpaid'); // Track current section (Paid or Unpaid)

  const openReservationModal = (reservation) => {
    setSelectedReservation(reservation);
    setModalOpen(true);
  };

  const closeReservationModal = () => {
    setModalOpen(false);
    setSelectedReservation(null);
  };

  const openPaymentModal = (reservation) => {
    setSelectedReservation(reservation);
    setPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setPaymentModalOpen(false);
    setSelectedReservation(null);
  };

  // Handle payment confirmation
  const handlePayment = (paymentInfo) => {
    // Update bill status in the data
    const updatedCustomers = reservationsData.customers.map((customer) => {
      return {
        ...customer,
        Reservations: customer.Reservations.map((reservation) => {
          if (reservation.ReservationID === selectedReservation.ReservationID) {
            return {
              ...reservation,
              Bill: {
                ...reservation.Bill,
                Status: 'Paid',
                PaymentDate: new Date().toISOString(),
              },
            };
          }
          return reservation;
        }),
      };
    });

    // Update state (you might need to update the data in a global state or backend here)
    reservationsData.customers = updatedCustomers;
    closePaymentModal();
  };

  const unpaidBills = reservationsData.customers
    .flatMap((customer) => customer.Reservations)
    .filter((reservation) => reservation.Bill && reservation.Bill.Status === 'Unpaid');

  const paidBills = reservationsData.customers
    .flatMap((customer) => customer.Reservations)
    .filter((reservation) => reservation.Bill && reservation.Bill.Status === 'Paid');

  const renderBills = (section) => {
    const bills = section === 'unpaid' ? unpaidBills : paidBills;
    return (
      <table>
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Room No</th>
            <th>Total Amount</th>
            <th>Status</th>
            {section === 'unpaid' && <th>Pay</th>}
          </tr>
        </thead>
        <tbody>
          {bills.map((reservation) => {
            // Find the customer for each reservation using Reservation.CustomerID
            const customer = reservationsData.customers.find(
              (customer) => customer.CustomerID === reservation.CustomerID
            );
            return (
              <tr key={reservation.ReservationID}>
                <td>{reservation.ReservationID}</td>
                <td>{customer ? customer.CustomerID : 'N/A'}</td>
                <td>{customer ? `${customer.FirstName} ${customer.LastName}` : 'N/A'}</td>
                <td>{reservation.RoomNo}</td>
                <td>{reservation.Bill.TotalAmount}</td>
                <td>{reservation.Bill.Status}</td>
                {section === 'unpaid' && (
                  <td>
                    <button onClick={() => openPaymentModal(reservation)}>Pay</button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container">
      <h1>Bill Page</h1>

      <div className="buttons-container">
        <button onClick={() => setCurrentSection('unpaid')} className="section-button">
          Unpaid Bills
        </button>
        <button onClick={() => setCurrentSection('paid')} className="section-button">
          Paid Bills
        </button>
      </div>

      <div className="section">
        {renderBills(currentSection)}
      </div>

      {modalOpen && (
        <ReservationModal
          reservation={selectedReservation}
          closeModal={closeReservationModal}
        />
      )}

      {paymentModalOpen && (
        <PaymentModal
          reservation={selectedReservation}
          closePaymentModal={closePaymentModal}
          handlePayment={handlePayment}
        />
      )}
    </div>
  );
};

export default BillPage;
