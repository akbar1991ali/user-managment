import React from 'react';
import { Table } from 'react-bootstrap';

type UsersProps = {
    usersData?:any
  
  }
const UserList = (props:UsersProps) => {
    if (props.usersData.length === 0 ) {
        return <div key={1}>No users available.</div>; // Handle case when users array is empty
      }
  return (

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>SL#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {props.usersData && props.usersData.map((user:any,index:any) => (
        <tr key={user.index}>
          <td>{index+1}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
};


export default UserList;
