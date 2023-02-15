import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

//Componente para cadastro de notícias
const CadastrarNoticia = () => {

    //Declarando constantes para armazenar os dados da notícia
    const[titulo, setTitulo] = useState('');
    const[conteudo, setConteudo] = useState('');
    const[data_lancamento, setData] = useState('');

    //Função para cadastrar a notícia
    const cadNoticia = () => {
        const noticia = {
            titulo: titulo,
            conteudo: conteudo,
            data_lancamento: data_lancamento}

            //Fazendo a requisição para o backend
            axios.post('/api/cadNoticia', noticia)
            .then((response) => {
                Swal.fire('Feito', 'Notícia cadastrada com sucesso')
            }
            ).then((error) => {
                console.log(error);
            })
        }

    return (
        //Retornando o formulário para cadastro da notícia
        <div className="containerform">
            
            <div className="formNoticia">
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" className="form-control" id="titulo" placeholder="Título da Notícia" value={titulo} onChange={(e) => {setTitulo(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="conteudo">Conteúdo</label>
                    <textarea className="form-control" id="conteudo" rows="20" value={conteudo} onChange={(e) => {setConteudo(e.target.value)}}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data da Publicação</label>
                    <input type="date" className="form-control" id="data" value={data_lancamento} onChange={(e) => {setData(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <button onClick={cadNoticia} className="btn">Cadastrar</button>
                </div>
            </div>

            
        </div>
        
    )
}

export default CadastrarNoticia;