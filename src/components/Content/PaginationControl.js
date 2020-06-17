import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './styles.module.css';

const PaginationControl = ({ prev, next, setUrl }) => (
  <Row className={styles.pagination}>
    <Col className="text-center">
      {prev && (
        <Button onClick={() => {setUrl(prev)}}>prev</Button>
      )}
    </Col>
    <Col className="text-center">
      {next && (
        <Button onClick={() => {setUrl(next)}}>next</Button>
      )}
    </Col>
  </Row>
);

PaginationControl.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
  setUrl: PropTypes.func.isRequired
};

PaginationControl.defaultProps = {
  prev: '',
  next: '',
};

export default PaginationControl;
