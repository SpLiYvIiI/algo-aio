import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AlgorithmsNavigationPage from './AlgorithmsNavigationPage';
import HomePage from './HomePage';
import VisualizationPage from './VisualizationPage';
import { learningMaterial } from '../common/consts';

const Main = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/algorithms" element={<AlgorithmsNavigationPage />} />
        {Object.keys(learningMaterial.SORTING).map((key, id) => {
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
        {Object.keys(learningMaterial['GRAPH-TRAVERSAL']).map((key, id) => {
          return (
            <Route
              key={id}
              path={`/algorithms/${key}`}
              element={
                <VisualizationPage
                  algorithmType="GRAPH-TRAVERSAL"
                  algorithmName={key}
                />
              }
            />
          );
        })}
      </Routes>
  );
};

export default Main;
