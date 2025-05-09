
import React, { createContext, useContext, useState } from 'react';

const ClienteContext = createContext();

export const useClientes = () => useContext(ClienteContext);

export const ClienteProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  const adicionarCliente = (cliente) => {
    setClientes((prev) => [...prev, cliente]);
  };

  return (
    <ClienteContext.Provider value={{ clientes, adicionarCliente }}>
      {children}
    </ClienteContext.Provider>
  );
};
