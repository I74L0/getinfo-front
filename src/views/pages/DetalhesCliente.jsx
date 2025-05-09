// src/pages/DetalhesCliente.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useClientes } from '../../context/ClienteContext';

export default function DetalhesCliente() {
  const { id } = useParams();
  const { clientes } = useClientes();
  const cliente = clientes[id];

  if (!cliente) return <p>Cliente não encontrado.</p>;

  return (
    <div className="p-4">
      <h2>{cliente.nomeFantasia}</h2>
      <p><strong>Razão Social:</strong> {cliente.razaoSocial}</p>
      <p><strong>Responsável:</strong> {cliente.nomeResponsavel} {cliente.sobrenomeResponsavel}</p>
      <p><strong>Email:</strong> {cliente.emailResponsavel}</p>
      <p><strong>CNPJ:</strong> {cliente.cnpj}</p>
      {/* Exiba mais campos conforme necessário */}
    </div>
  );
}
