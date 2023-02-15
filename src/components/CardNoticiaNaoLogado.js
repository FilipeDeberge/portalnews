import React from "react";
const moment = require("moment");

//Componente para exibir as notícias
const CardNoticiaNaoLogado = ({noticia}) => {
 
    return (
        
        //Retornando o card com os dados da notícia
        <div className="card">
        <div className="card-body">
            <h2 className="card-title">{noticia.titulo}</h2>
            <p className="card-text">{noticia.conteudo}</p>
            <p className="card-data">Data da Publicação: {moment(noticia.data_lancamento).format("DD/MM/YYYY")}</p>            
        </div>
        </div>
    );
    }

export default CardNoticiaNaoLogado;