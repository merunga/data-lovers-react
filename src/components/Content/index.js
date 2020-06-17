import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import fetch from '../../lib/utils/fetch';
import CharacterCard from '../CharacterCard';
import PaginationControl from './PaginationControl';

const Content = ({ searchText, url, setUrl }) => {
  const [data, setData] = useState({ info: {}, results: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, searchText).then((jsonResponse) => {
      setData(jsonResponse);
      setLoading(false);
    })
  }, [url, searchText]);

  if (loading) {
    return 'Loading...';
  }

  const pagination = (
    <PaginationControl
      prev={data.info.prev}
      next={data.info.next}
      setUrl={setUrl}
    />
  );

  const cards = data.results.map((character) => (
    <CharacterCard key={character.id} character={character} />
  ));

  return (
    <Container fluid>
      {pagination}
      <Row>
        {data.results.length === 0 && (
          <Col><h3>No se encontraron resultados</h3></Col>
        )}
        {cards}
      </Row>
      {pagination}
    </Container>
  );
};

Content.propTypes = {
  searchText: PropTypes.string.isRequired,
  url: PropTypes.string,
  setUrl: PropTypes.func.isRequired,
};

Content.defaultProps = {
  url: '',
};

export default Content;
