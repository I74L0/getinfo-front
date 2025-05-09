
import React from 'react';
import { useClientes } from '../../context/ClienteContext';
import { CCard, CCardBody, CCardTitle, CButton } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

export default function Clientes() {
  const { clientes } = useClientes();
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <h2>Lista de Clientes</h2>
      {clientes.map((cliente, index) => (
        <CCard key={index}>
          <CCardBody>
            <CCardTitle>{cliente.nomeFantasia}</CCardTitle>
            <p><strong>Responsável:</strong> {cliente.nomeResponsavel} {cliente.sobrenomeResponsavel}</p>
            <CButton
              color="primary"
              onClick={() => navigate(`/clientes/${index}`)}
            >
              Ver detalhes
            </CButton>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
}
