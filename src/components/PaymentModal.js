import React, { useState } from 'react';

const PaymentModal = ({ reservation, closePaymentModal, handlePayment }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [totalAmount] = useState(reservation.Bill.TotalAmount);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentMethod || !customerName) {
      alert('Please fill in all fields.');
      return;
    }

    // Create the payment info
    const paymentInfo = {
      customerId: reservation.CustomerID,
      customerName,
      paymentMethod,
      totalAmount,
    };

    handlePayment(paymentInfo); // Pass to parent to update the data
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Credit">Credit</option>
            </select>
          </div>
          <div>
            <label>Total Amount</label>
            <input type="text" value={totalAmount} disabled />
          </div>
          <button type="submit">Pay</button>
          <button type="button" onClick={closePaymentModal}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
