import React from 'react';
import { Outlet, Link, BrowserRouter, Route, Routes } from "react-router-dom";
import styles from './App.css';
import Header from './pages/Header';
import List from './pages/List';
import NoPage from './pages/NoPage';
import View from './pages/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<List />} />
          <Route path="view/:weatherId" element={<View />}/>
          <Route path="*"  element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
