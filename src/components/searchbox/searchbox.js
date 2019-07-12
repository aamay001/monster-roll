import React from 'react';
import './searchbox.styles.css';

export const SearchBox = ({ value, placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
  />
);