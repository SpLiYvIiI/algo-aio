import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AlgorithmsNavigationPage from './AlgorithmsNavigationPage';
import HomePage from './HomePage';
import VisualizationPage from './VisualizationPage';
import { learningMaterial } from '../common/consts';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/algorithms" element={<AlgorithmsNavigationPage />} />
        {Object.keys(learningMaterial.SORTING).map((key, id) => {
          console.log(key);
          return (
            <Route
              key={id}
              path={`/algorithms/${key}`}
              element={
                <VisualizationPage
                  algorithmType="SORTING"
                  algorithmName={key}
                />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
