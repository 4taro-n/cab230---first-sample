import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import OneVolcanoPage from './components/pages/OneVolcanoPage';
import VolcanoListPage from './components/pages/VolcanoListPage';
import RegisterPage from './components/pages/ResisterPage';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/LoginPage" element={<LoginPage />}></Route>
          <Route exact path="/VolcanoListPage" element={<VolcanoListPage />}></Route>
          <Route exact path="/RegisterPage" element={<RegisterPage />}></Route>
          <Route exact path="VolcanoListPage/OneVolcanoPage/:id" element={< OneVolcanoPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
