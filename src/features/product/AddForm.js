import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddForm({ addProduct }) {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !imageURL.trim() || !type.trim()) {
      setError('Please fill in all fields');
      return;
    }

    addProduct({ name, type, imageURL });

    // Clear fields and error
    setName('');
    setImageURL('');
    setType('');
    setError('');
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form id="create-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input
            name="imageURL"
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Add product</button>
      </form>
    </div>
  );
}

AddForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};
