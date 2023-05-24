import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Popular from './pages/Popular';
import UpcomingPage from './pages/UpcomingPage';
import PlayingNowPage from './pages/PlayingNowPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/Popular' element={<Popular />}></Route>
      <Route path='/UpcomingPage' element={<UpcomingPage />}></Route>
      <Route path='/PlayingNowPage' element={<PlayingNowPage />}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
