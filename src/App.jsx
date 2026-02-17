import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ROUTES } from './const.js';

import HomePage from './pages/HomePage.jsx';
import DiagnosisPage from './pages/DiagnosisPage.jsx';
import ResultPage from './pages/ResultPage.jsx';
import SourcePage from './pages/SourcePage.jsx';
import OthersPage from './pages/OthersPage.jsx';

import './App.css';
import "./App.module.css";;

import Button from './components/Button/Button';
import buttonStyles from "./components/Button/Button.module.css";

import Input from './components/Input/Input';
import inputStyles from "./components/Input/Input.module.css";

import Background from './components/Background/Background';
import Header from './components/Header/Header.jsx';

function App() {
  const handleClick = () => {
    alert("");
  };

  return (
    <>
      <Background />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.DIAGNOSIS} element={<DiagnosisPage />} />
          <Route path={ROUTES.RESULT} element={<ResultPage />} />
          <Route path={ROUTES.SOURCE} element={<SourcePage />} />
          <Route path={ROUTES.OTHERS} element={<OthersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
