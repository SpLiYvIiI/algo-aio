import { useState } from "react";

const App = () => {
  const contributors = ['Giorgi','Roma','Irakli','Avto']
  const [contributor,setContributor] = useState(contributors[Math.floor(Math.random()*10)%4])
  return (
    <div>
    <h1>Hello {contributor}</h1>
    <button onClick={()=> {
      setContributor(contributors[Math.floor(Math.random()*10)%4])
    }}>Hmmm...</button>
    </div>
  );
}

export default App;
