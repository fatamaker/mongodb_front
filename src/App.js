

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TablePage from "./TablePage"; // Page with the table

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
