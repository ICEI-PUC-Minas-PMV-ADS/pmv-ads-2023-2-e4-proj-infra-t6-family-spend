import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    const url = 'https://family-spend-2e147db72cad.herokuapp.com/api/familia';


  const [familia, setFamilia] = useState ([]);
   useEffect(() => {
     const fetchData = async () => {
       const result = await fetch(url);
       result.json().then(json => {
         setFamilia(json);
       })
     }
     fetchData();
   }, []);

  return (
    <div>
      {familia.map((item, index) => (
        <div key = {index}>
          <span>{item.nomeFamilia}</span>
        </div>
      ))}
    </div>
  );
}

export default App;