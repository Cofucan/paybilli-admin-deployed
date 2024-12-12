import React, { createContext, useContext, useState } from "react";

const UseStateContext = createContext();

export const useNotification = () => useContext(UseStateContext);

export const UserNotification = ({ children }) => {
  const [isModalNotification, setIsModalNotification] = useState(false);

  return (
    <UseStateContext.Provider value={{ isModalNotification, setIsModalNotification }}>
      {children}
    </UseStateContext.Provider>
  );
};
