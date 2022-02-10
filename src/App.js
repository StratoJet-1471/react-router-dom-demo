import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from './Main.jsx';
import { Cruiser } from './Cruiser.jsx';
import { Destroyer } from './Destroyer.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route exact path="cruiser" element={<Cruiser/>} />
            <Route exact path="destroyer" element={<Destroyer/>} />
          </Route>  
        </Routes>
      </BrowserRouter>
  );
}

export default App;