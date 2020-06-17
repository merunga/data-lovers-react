import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Filter from './components/Filter';
import Content from './components/Content';

function App() {
  const [searchText, setSearchText] = useState('');
  const [url, setUrl] = useState('');

  return (
    <Container>
      <Header />
      <Filter setSearchText={setSearchText} setUrl={setUrl} />
      <Content searchText={searchText} url={url} setUrl={setUrl} />
    </Container>
  );
}

export default App;
