//import React from 'react';
import './styles/forms.css';

const FormsBackground = ({ count }: { count: number }) => (
  <div className="area">
    <div className="circles">
      {new Array(count || 10).fill(0).map((x, i) => (
        <span key={i} />
      ))}
    </div>
  </div>
);

export default FormsBackground;
