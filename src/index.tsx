import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Home />
    </div>
  </React.StrictMode>
);
