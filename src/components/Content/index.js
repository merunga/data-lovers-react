import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import fetch from '../../lib/utils/fetch';

const Content = () => {
  const [data, setData] = useState({ info: {}, results: [] });
  const [loading, setLoading] = useState(false);
  const [currUrl, setCurrUrl] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(currUrl).then((jsonResponse) => {
      setData(jsonResponse);
      setLoading(false);
    })
  }, [currUrl]);

  if (loading) {
    return 'Loading...';
  }

  return (
    <Container fluid>
      <Row>
        {data.results.map((character) => (
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
      <Row>
        <Col className="text-center">
          {data.info.prev && (
            <Button onClick={() => {setCurrUrl(data.info.prev)}}>prev</Button>
          )}
        </Col>
        <Col className="text-center">
          {data.info.next && (
            <Button onClick={() => {setCurrUrl(data.info.next)}}>next</Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
