import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from "./context/authContext/AuthContext";

import { CarContextProvider } from './context/CarsContext/carContext';
import { CategoryContextProvider } from './context/CategoryContext/categoryContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CarContextProvider>
        <CategoryContextProvider>
          <App />
        </CategoryContextProvider>
      </CarContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')


);
