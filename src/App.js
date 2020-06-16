import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Filter from './components/Filter';
import Content from './components/Content';

function App() {
  return (
    <Container>
      <Header />
      <Filter />
      <Content />
    </Container>
  );
}

export default App;
