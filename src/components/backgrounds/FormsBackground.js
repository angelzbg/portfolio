import React from 'react';
import './styles/forms.css';

export default ({ count }) => (
  <div className="area">
    <div className="circles">
      {new Array(count || 10).fill(0).map((x, i) => (
        <span key={i} />
      ))}
    </div>
  </div>
);
