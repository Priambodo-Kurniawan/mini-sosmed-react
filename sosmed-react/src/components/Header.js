import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div style={{
    backgroundColor: '#28d7a4',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  }}>
    <Link to="/" style={{color: '#009688'}}>
      <p>Avatar Creator</p>
    </Link>
  </div>
);
