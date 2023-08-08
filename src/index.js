import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Movies from './pages/Storage/Movies';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';

ReactDOM.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
