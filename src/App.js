import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Filter from './components/Filter';
import Content from './components/Content';

function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <Container>
      <Header />
      <Filter setSearchText={setSearchText} />
      <Content searchText={searchText} />
    </Container>
  );
}

export default App;
