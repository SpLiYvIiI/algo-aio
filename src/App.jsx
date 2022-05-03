import { React, useState } from 'react';
import Main from './components/Main';

const App = () => {
  const contributors = ['Giorgi', 'Roma', 'Irakli', 'Avto'];
  const [contributor, setContributor] = useState(
    contributors[Math.floor(Math.random() * 10) % 4]
  );
  return (
    <div>
      <h1>Hello {contributor}</h1>
      <button
        onClick={() => {
          setContributor(contributors[Math.floor(Math.random() * 10) % 4]);
        }}
      >
        Hmmm...
      </button>
      <Main mamamia="rsx" />
    </div>
  );
};

export default App;
