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
        <Route
          path="/algorithms/bubble-sort"
          element={
            <VisualizationPage
              algorithmType="SORTING"
              algorithmName="bubble-sort"
            />
          }
        />
        <Route
          path="/algorithms/insertion-sort"
          element={
            <VisualizationPage
              algorithmType="SORTING"
              algorithmName="insertion-sort"
            />
          }
        />
        <Route
          path="/algorithms/heap-sort"
          element={
            <VisualizationPage
              algorithmType="SORTING"
              algorithmName="heap-sort"
            />
          }
        />
        <Route
          path="/algorithms/quick-sort"
          element={
            <VisualizationPage
              algorithmType="SORTING"
              algorithmName="quick-sort"
            />
          }
        />
        <Route
          path="/algorithms/selection-sort"
          element={
            <VisualizationPage
              algorithmType="SORTING"
              algorithmName="selection-sort"
            />
          }
        />
        <Route
          path="/algorithms/dfs"
          element={
            <VisualizationPage
              algorithmType="GRAPH-TRAVERSAL"
              algorithmName="dfs"
            />
          }
        />
        <Route
          path="/algorithms/bfs"
          element={
            <VisualizationPage
              algorithmType="GRAPH-TRAVERSAL"
              algorithmName="bfs"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
