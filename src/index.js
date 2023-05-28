import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Popular from './pages/Popular';
import UpcomingPage from './pages/UpcomingPage';
import PlayingNowPage from './pages/PlayingNowPage';
import TopRatedPage from './pages/TopRatedPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/HomePage' element={<HomePage />}></Route>
      <Route path='/Popular' element={<App />}></Route>
      <Route path='/Popular' element={<Popular />}></Route>
      <Route path='/UpcomingPage' element={<UpcomingPage />}></Route>
      <Route path='/PlayingNowPage' element={<PlayingNowPage />}></Route>
      <Route path='/TopRatedPage' element={<TopRatedPage />}></Route>
      <Route path='/AboutUsPage' element={<AboutUsPage />}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
