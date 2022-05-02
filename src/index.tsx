import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RTKQueryApp from './rtk-query/components/RTKQueryApp';
import ReactQueryApp from './react-query/components/ReactQueryApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RTKQueryApp />
    <ReactQueryApp />
  </React.StrictMode>
);
