import React from 'react';
import { useData } from '../context/DataContext';

const CustomerPage = () => {
  const { customers } = useData();
  console.log(customers)
  return (
    <div>
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Reservations</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.CustomerID}>
              <td>{customer.CustomerID}</td>
              <td>{`${customer.FirstName} ${customer.LastName}`}</td>
              <td>{customer.Email}</td>
              <td>{customer.Reservations.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPage;
