import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const Filter = ({ setSearchText, setUrl }) => {
  const [tempSearchText, setTempSearchText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault()
    setSearchText(tempSearchText);
    setUrl('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Buscar..."
          onChange={(e) => {
            setTempSearchText(e.target.value);
          }}
          value={tempSearchText}
        />
      </Form.Group>
    </Form>
  );
}

Filter.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired,
};

export default Filter;
