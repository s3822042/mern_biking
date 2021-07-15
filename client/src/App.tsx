import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./app/Router";

function App() {
  return (
      <Router>
          <div className="page__container">
              <AppRouter />
          </div>
      </Router>
  );
}


export default App;
