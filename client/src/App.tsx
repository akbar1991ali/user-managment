import React from 'react';
import './App.css';
import UserManagement from './user-managment/UserManagment'
import Header from './comman/Header';
import Footer from './comman/Footer';


function App() {
  return (
   <>
   <Header/>
   <UserManagement/>
   <Footer/>
   </>
  );
}

export default App;
