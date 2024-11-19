// import React, { useState } from 'react';
// import reservationsData from '../data/customer_data.json';

// const Dashboard = () => {
//   const [customers, setCustomers] = useState(reservationsData.customers);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [newCustomer, setNewCustomer] = useState({
//     CustomerID: '',
//     FirstName: '',
//     LastName: '',
//     PhoneNumber: '',
//     DOB: '',
//     Email: '',
//   });

//   const [newReservation, setNewReservation] = useState({
//     ReservationID: '',
//     RoomNo: '',
//     CheckInDate: '',
//     CheckOutDate: '',
//     Bill: {
//       TotalAmount: '',
//       Status: 'Unpaid',
//     },
//   });

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => {
//     setIsModalOpen(false);
//     resetForm();
//   };

//   // Reset form
//   const resetForm = () => {
//     setNewCustomer({
//       CustomerID: '',
//       FirstName: '',
//       LastName: '',
//       PhoneNumber: '',
//       DOB: '',
//       Email: '',
//     });
//     setNewReservation({
//       ReservationID: '',
//       RoomNo: '',
//       CheckInDate: '',
//       CheckOutDate: '',
//       Bill: {
//         TotalAmount: '',
//         Status: 'Unpaid',
//       },
//     });
//   };

//   // Handle input changes
//   const handleCustomerInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCustomer({ ...newCustomer, [name]: value });
//   };

//   const handleReservationInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReservation({ ...newReservation, [name]: value });
//   };

//   // Add new customer and reservation
//   const handleAddData = () => {
//     if (
//       newCustomer.CustomerID &&
//       newCustomer.FirstName &&
//       newCustomer.LastName &&
//       newCustomer.Email &&
//       newReservation.ReservationID &&
//       newReservation.RoomNo &&
//       newReservation.CheckInDate &&
//       newReservation.CheckOutDate &&
//       newReservation.Bill.TotalAmount
//     ) {
//       const newCustomerWithReservation = {
//         ...newCustomer,
//         Reservations: [newReservation],
//       };

//       const updatedCustomers = [...customers, newCustomerWithReservation];
//       setCustomers(updatedCustomers);

//       // Simulate saving to JSON
//       console.log('Updated Customers:', updatedCustomers);

//       closeModal();
//     } else {
//       alert('Please fill out all required fields.');
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <h1>Dashboard</h1>

//       <button onClick={openModal} className="action-button">
//         Add Customer & Reservation
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Add Customer and Reservation</h2>
//             <form>
//               <h3>Customer Details</h3>
//               <label>
//                 Customer ID:
//                 <input
//                   type="text"
//                   name="CustomerID"
//                   value={newCustomer.CustomerID}
//                   onChange={handleCustomerInputChange}
//                 />
//               </label>
//               <label>
//                 First Name:
//                 <input
//                   type="text"
//                   name="FirstName"
//                   value={newCustomer.FirstName}
//                   onChange={handleCustomerInputChange}
//                 />
//               </label>
//               <label>
//                 Last Name:
//                 <input
//                   type="text"
//                   name="LastName"
//                   value={newCustomer.LastName}
//                   onChange={handleCustomerInputChange}
//                 />
//               </label>
//               <label>
//                 Phone Number:
//                 <input
//                   type="text"
//                   name="PhoneNumber"
//                   value={newCustomer.PhoneNumber}
//                   onChange={handleCustomerInputChange}
//                 />
//               </label>
//               <label>
//                 Email:
//                 <input
//                   type="email"
//                   name="Email"
//                   value={newCustomer.Email}
//                   onChange={handleCustomerInputChange}
//                 />
//               </label>
//               <label>
//                 Date of Birth:
//                 <input
//                   type="date"
//                   name="DOB"
//                   value={newCustomer.DOB}
//                   onChange={handleCustomerInputChange}
//                 />
//               </label>

//               <h3>Reservation Details</h3>
//               <label>
//                 Reservation ID:
//                 <input
//                   type="text"
//                   name="ReservationID"
//                   value={newReservation.ReservationID}
//                   onChange={handleReservationInputChange}
//                 />
//               </label>
//               <label>
//                 Room No:
//                 <input
//                   type="text"
//                   name="RoomNo"
//                   value={newReservation.RoomNo}
//                   onChange={handleReservationInputChange}
//                 />
//               </label>
//               <label>
//                 Check-In Date:
//                 <input
//                   type="date"
//                   name="CheckInDate"
//                   value={newReservation.CheckInDate}
//                   onChange={handleReservationInputChange}
//                 />
//               </label>
//               <label>
//                 Check-Out Date:
//                 <input
//                   type="date"
//                   name="CheckOutDate"
//                   value={newReservation.CheckOutDate}
//                   onChange={handleReservationInputChange}
//                 />
//               </label>
//               <label>
//                 Total Amount:
//                 <input
//                   type="number"
//                   name="TotalAmount"
//                   value={newReservation.Bill.TotalAmount}
//                   onChange={(e) =>
//                     setNewReservation({
//                       ...newReservation,
//                       Bill: {
//                         ...newReservation.Bill,
//                         TotalAmount: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </label>

//               <div className="modal-actions">
//                 <button type="button" onClick={handleAddData}>
//                   Add Data
//                 </button>
//                 <button type="button" onClick={closeModal}>
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import reservationsData from '../data/customer_data.json';

const Dashboard = () => {
  const [customers, setCustomers] = useState(reservationsData.customers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newCustomer, setNewCustomer] = useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    DOB: '',
    Email: '',
  });

  const [newReservation, setNewReservation] = useState({
    RoomNo: '',
    CheckInDate: '',
    CheckOutDate: '',
    RoomType: 'Single', // Default selection
    TotalAmount: 0,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setNewCustomer({
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      DOB: '',
      Email: '',
    });
    setNewReservation({
      RoomNo: '',
      CheckInDate: '',
      CheckOutDate: '',
      RoomType: 'Single',
      TotalAmount: 0,
    });
  };

  // Handle input changes
  const handleCustomerInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleReservationInputChange = (e) => {
    const { name, value } = e.target;
    setNewReservation({ ...newReservation, [name]: value });
  };

  // Calculate total room price
  const calculateTotalPrice = () => {
    const roomPricePerNight = newReservation.RoomType === 'Single' ? 200 : 250;
    const checkInDate = new Date(newReservation.CheckInDate);
    const checkOutDate = new Date(newReservation.CheckOutDate);

    const nights =
      checkInDate && checkOutDate
        ? Math.max(0, (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
        : 0;

    return roomPricePerNight * nights;
  };

  // Add new customer and reservation
  const handleAddData = () => {
    const customerID =
      customers.length > 0 ? customers[customers.length - 1].CustomerID + 1 : 1;
    const reservationID =
      customers.flatMap((c) => c.Reservations).length > 0
        ? Math.max(
            ...customers.flatMap((c) => c.Reservations.map((r) => r.ReservationID))
          ) + 1
        : 101;

    const totalAmount = calculateTotalPrice();

    if (
      newCustomer.FirstName &&
      newCustomer.LastName &&
      newCustomer.Email &&
      newReservation.RoomNo &&
      newReservation.CheckInDate &&
      newReservation.CheckOutDate &&
      totalAmount > 0
    ) {
      const newCustomerWithReservation = {
        CustomerID: customerID,
        ...newCustomer,
        Reservations: [
          {
            ReservationID: reservationID,
            RoomNo: newReservation.RoomNo,
            CheckInDate: newReservation.CheckInDate,
            CheckOutDate: newReservation.CheckOutDate,
            Status: 'Confirmed',
            Room: {
              Category: newReservation.RoomType,
              PricePerNight:
                newReservation.RoomType === 'Single' ? 200 : 250,
              Status: 'Available',
            },
            Bill: {
              BillID: reservationID + 200,
              RoomCharges: totalAmount,
              FoodCharges: 0,
              TotalAmount: totalAmount,
              Status: 'Unpaid',
              PaymentDate: null,
            },
            Orders: [],
          },
        ],
      };

      const updatedCustomers = [...customers, newCustomerWithReservation];
      setCustomers(updatedCustomers);
      console.log(reservationsData)

      // Simulate saving to JSON
      console.log('Updated Customers:', updatedCustomers);

      closeModal();
    } else {
      alert('Please fill out all required fields and ensure dates are valid.');
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <button onClick={openModal} className="action-button">
        Add Customer & Reservation
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Customer and Reservation</h2>
            <form>
              <h3>Customer Details</h3>
              <label>
                First Name:
                <input
                  type="text"
                  name="FirstName"
                  value={newCustomer.FirstName}
                  onChange={handleCustomerInputChange}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="LastName"
                  value={newCustomer.LastName}
                  onChange={handleCustomerInputChange}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="text"
                  name="PhoneNumber"
                  value={newCustomer.PhoneNumber}
                  onChange={handleCustomerInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="Email"
                  value={newCustomer.Email}
                  onChange={handleCustomerInputChange}
                />
              </label>
              <label>
                Date of Birth:
                <input
                  type="date"
                  name="DOB"
                  value={newCustomer.DOB}
                  onChange={handleCustomerInputChange}
                />
              </label>

              <h3>Reservation Details</h3>
              <label>
                Room No:
                <input
                  type="text"
                  name="RoomNo"
                  value={newReservation.RoomNo}
                  onChange={handleReservationInputChange}
                />
              </label>
              <label>
                Check-In Date:
                <input
                  type="date"
                  name="CheckInDate"
                  value={newReservation.CheckInDate}
                  onChange={handleReservationInputChange}
                />
              </label>
              <label>
                Check-Out Date:
                <input
                  type="date"
                  name="CheckOutDate"
                  value={newReservation.CheckOutDate}
                  onChange={handleReservationInputChange}
                />
              </label>
              <label>
                Room Type:
                <select
                  name="RoomType"
                  value={newReservation.RoomType}
                  onChange={handleReservationInputChange}
                >
                  <option value="Single">Single ($200)</option>
                  <option value="Double">Double ($250)</option>
                </select>
              </label>
              <p>Total Room Charges: ${calculateTotalPrice()}</p>

              <div className="modal-actions">
                <button type="button" onClick={handleAddData}>
                  Add Data
                </button>
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
