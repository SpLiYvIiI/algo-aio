import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AlgorithmsNavigationPage from './AlgorithmsNavigationPage';
import HomePage from './HomePage';
import VisualizationPage from './VisualizationPage';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/algorithms" element={<AlgorithmsNavigationPage />} />
        <Route path="/algorithms/bubble-sort" element={<VisualizationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
