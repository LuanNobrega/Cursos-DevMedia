import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../Paginas/PaginaInicial/index';
import PaginaFrontEnd from '../Paginas/PaginaFrontEnd/index';
import PaginaBackEnd from '../Paginas/PaginaBackEnd/index';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <PaginaInicial/> } />
            <Route path='/front-end' element={ <PaginaFrontEnd/> } />
            <Route path='/back-end' element={ <PaginaBackEnd/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;