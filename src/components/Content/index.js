import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import fetch from '../../lib/utils/fetch';

const Content = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch().then((jsonResponse) => {
      setData(jsonResponse.results);
      setLoading(false);
    })
  }, []);

  if (loading) {
    return 'Loading...';
  }

  return (
    <Container fluid>
      <Row>
        {data.map((character) => (
          <Col key={character.name} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Content;
