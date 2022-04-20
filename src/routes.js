import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/home/home';

export const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/statistics' element={<h1>Statistics</h1>}></Route>
    </Routes>
  );
};
