import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from "./context/authContext/AuthContext";

import { CarContextProvider } from './context/CarsContext/carContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CarContextProvider>
        <App />
      </CarContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')


);
