import React from "react";
import OculosGrau01 from '../assets/imagens/oculos01.png';
import OculosGrau02 from '../assets/imagens/oculos02.png';
import OculosGrau03 from '../assets/imagens/oculos03.png';
import OculosGrau04 from '../assets/imagens/oculos04.png';

function secaoProduto(){
    return(
        <div className="container-produtos">
            <h2 id='produtos'>NOSSOS PRODUTOS</h2>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className="cards-produtos">
                <div className="card">
                    <h2>Óculos de grau</h2>
                    <img className="oculosGrau" src={OculosGrau01} alt='"oculosGrau01"'></img>
                    <p>R$ 500,00</p>
                </div>
                <div className="card">
                    <h2>Óculos transition</h2>
                    <img className="oculosGrau" src={OculosGrau02} alt='"oculosGrau02"'></img>
                    <p>R$ 750,00</p>
                </div>
                <div className="card">
                    <h2>Óculos de sol</h2>
                    <img className="oculosGrau" src={OculosGrau03} alt='"oculosGrau03"'></img>
                    <p>R$ 700,00</p>
                </div>
                <div className="card">
                    <h2>Óculos infantil</h2>
                    <img className="oculosGrau" src={OculosGrau04} alt="oculosGrau04"></img>
                    <p>R$ 500,00</p>
                </div>
            </div>
            <div>
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </div>
    )
}

export default secaoProduto;