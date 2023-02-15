import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditarNoticia from "../components/EditarNoticia";
import NoticiasNaoLogado from "../components/NoticiasNaoLogado";
import CadastrarNoticia from "../components/CadastrarNoticia";
import Noticias from "../components/Noticias";


const Rotas = () => {
    return (
        <div className="App">
        <Router>
            <Routes>
            <Route path="/" element={<NoticiasNaoLogado />} exact></Route>
            <Route path="/admnoticias" element={<Noticias />} exact></Route>
            <Route path="/admin" element={<CadastrarNoticia />} exact></Route>
            <Route path="api/edit/:_id" element={<EditarNoticia />} exact></Route>
            </Routes>
        </Router>
        </div>
    );
    }

export default Rotas;