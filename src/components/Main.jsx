import React from 'react';
import BubbleSort from './D3/Sorting/BubbleSort';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Algorithms from './Algorithms';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/algorithms/bubble-sort" element={<BubbleSort />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
