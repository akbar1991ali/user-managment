import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CreateUser from './CreateUser';
import ListUser from './ListUser';
import LoadingComponent from '../comman/LoadingComponent';
import { API_URL } from '../config'; 

const UserManagement= () => {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const addUser = (newUser: string) => {
    setUsers([...users, newUser]);
  };


  useEffect(() => {
    // Fetch data from an API
    fetch(`${API_URL}users`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Create User</Card.Title>
              <CreateUser addUser={addUser}/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>User List</Card.Title>
            
              {loading ? <LoadingComponent /> :   <ListUser usersData={users}/>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserManagement;
