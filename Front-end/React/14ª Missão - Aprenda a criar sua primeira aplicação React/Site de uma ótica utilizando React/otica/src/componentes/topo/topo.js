import React from 'react';
import logo from '../assets/imagens/logo.png';

function topo(){
    return(
        <header className='container-topo'>
            <div className='limitar-secao'>
                <div className='topo'>
                    <div>
                    <img className='logo' src={logo} alt='logo'></img>
                    </div>
                    <div>
                        <a href='#produtos'>PRODUTOS</a>
                        <a href='#sobre'>SOBRE</a>
                        <a href='#contato'>CONTATO</a>
                    </div>
                </div>                                
            </div>
        </header>
    )
}
export default topo;