import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import './index.css';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Calculator></Calculator>, document.getElementById("root"));
});
