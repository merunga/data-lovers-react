import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import fetch from '../../lib/utils/fetch';
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

  const pagination = <PaginationControl prev={data.info.prev} next={data.info.next} setUrl={setUrl}/>;

  return (
    <Container fluid>
      {pagination}
      <Row>
        {data.results.length === 0 && (<h3>No se encontraron resultados</h3>)}
        {data.results.map((character) => (
          <Col key={character.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {pagination}
    </Container>
  );
};

Content.propTypes = {
  searchText: PropTypes.string.isRequired,
  url: PropTypes.string,
  setUrl: PropTypes.string.isRequired,
};

Content.defaultProps = {
  url: '',
};

export default Content;
