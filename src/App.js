import { Frontpg } from './component/Front';

import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Info } from './component/Info';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpg />}/>
        <Route path="/info" element={<Info/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;