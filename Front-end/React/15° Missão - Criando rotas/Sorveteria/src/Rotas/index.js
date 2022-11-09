import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../Home/index';
import Sabores from '../Sabores/index';
import Sobre from '../Sobre/index';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sabores' element={<Sabores />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;