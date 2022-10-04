import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,   Routes,
  Route, Navigate} from "react-router-dom";
import "./scss/Custom.scss"
import HomePage from './pages/HomePage';
import ProfilPage from './pages/ProfilPage';
import NotFound from './pages/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="Profil" element={<ProfilPage/>} />
    <Route path="/404" element={<Navigate to={<NotFound/>}/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
</BrowserRouter>
);
