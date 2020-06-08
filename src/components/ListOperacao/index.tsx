import React from 'react';
import { Table } from 'reactstrap';
// import { Container } from './styles';
interface Op {
  data: string,
  status: string,
  valor: string
}
const ListOperacao = (props:any) => {
  return (
    <Table striped>
    <thead>
      <tr>
        <th>ID</th>
        <th>Data da Operação</th>
        <th>Valor</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        props.operacoes.map((value:any) => (
          <tr key={value.id}>
          <th scope="row">{value.id}</th>
          <td>{value.data}</td>
          <td>{value.valor}</td>
          <td>{value.status}</td>
        </tr>
        ))
      }
      
      
    </tbody>
  </Table>
  );
}

export default ListOperacao;