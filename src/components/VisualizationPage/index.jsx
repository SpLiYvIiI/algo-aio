import React from 'react';
import Sorting from './Sorting';
const VisualizationPage = ({ algorithmType, algorithmName }) => {
  if (algorithmType === 'GRAPH-TRAVERSAL') {
    return <div>graph-algorithms</div>;
  } else if (algorithmType === 'SORTING') {
    return (
      <div>
        <Sorting algorithmName={algorithmName} />
      </div>
    );
  }
};

export default VisualizationPage;
