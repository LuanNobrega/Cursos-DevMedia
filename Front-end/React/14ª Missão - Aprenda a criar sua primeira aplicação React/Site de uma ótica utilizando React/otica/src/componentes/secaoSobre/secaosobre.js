import React from "react";
import ImagemSobre01 from '../assets/imagens/loja.png'
import ImagemSobre02 from '../assets/imagens/atendimento.png'

function secaoSobre(){
    return (
        <header className="secaoSobre">
            <div className="limitar-secao">
                <div className="sobre-texto">
                    <h1 id="sobre">QUEM SOMOS NÓS?</h1>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                </div>                
                <div className="secaoSobrecards">
                    <div className="sobre-card">
                        <img className="imagemSobre" src={ImagemSobre01} alt='loja'></img>
                    </div>
                    <div className="card-texto">
                        <h1>Nossas Filiais</h1>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card-texto">
                        <h1>Atendimento flexível</h1>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <div className="sobre-card">
                    <img className="imagemSobre" src={ImagemSobre02} alt='atendimento'></img>
                    </div>                    
                </div>
            </div>
        </header>
    )
}

export default secaoSobre;