import React from 'react';
import 'animate.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import Project from './components/project/Project';
import HireMe from './components/contact/HireMe';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
          <Main/>
          <Profile/>
          <Project/>
          <HireMe/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
