import React from "react";
import SecaoCapa from "../secaoCapa/secaoCapa";
import SecaoProdutos from "../secaoProdutos/secaoProdutos"
import SecaoSobre from "../secaoSobre/secaosobre"
import SecaoContato from "../secaoContato/secaoContato"

function conteudo(){
    return(
        <div>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </div>        
    )
}

export default conteudo;