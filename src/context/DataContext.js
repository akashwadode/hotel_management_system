import React, { createContext, useState, useContext } from 'react';
import reservationsData from '../data/customer_data.json'; // Path to your JSON file

// Create context
const DataContext = createContext();

// Provide context to the application
export const DataProvider = ({ children }) => {
  // Initialize state with JSON data
  const [customers, setCustomers] = useState(reservationsData.customers);

  return (
    <DataContext.Provider value={{ customers, setCustomers }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data context
export const useData = () => useContext(DataContext);
