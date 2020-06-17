import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const CharacterCard = ({ character }) => (
  <Col xs={12} sm={6} md={4} lg={3}>
    <Card>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>{character.status}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }),
}

export default CharacterCard;