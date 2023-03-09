import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter,   Routes,
  Route, Navigate} from "react-router-dom";
import "./scss/Custom.scss"
import HomePage from './pages/HomePage';
import ProfilPage from './pages/ProfilPage';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename="/">
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/Profil/:id" element={<ProfilPage/>}/>
    <Route exact path="/404" element={<NotFound/>}/>
    <Route path="*" element={<Navigate to={<NotFound/>}/> }/>
  </Routes>
</HashRouter>
);
