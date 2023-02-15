import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
const moment = require('moment');



const EditarNoticia = () => {

    //Declarando constantes para navegação e pegar o id da notícia
    const navegar = useNavigate()
    const params = useParams();

    //Declarando constantes para armazenar os dados da notícia
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [data_lancamento, setData] = useState('');

    //Função para pegar os dados da notícia

    useEffect(() => {
        axios.post('/api/obternoticia', {_id:params._id})
        .then((res) => {
        const noticia = res.data[0];
        setTitulo(noticia.titulo);
        setConteudo(noticia.conteudo);
        setData(noticia.data_lancamento);
        })
        .catch((err) => {
            console.log(err);
        })
        }, [params._id]);

    //Função para editar a notícia
    const editarNoticia = () => {
        const editnoticia = {
            _id: params._id,
            titulo: titulo,
            conteudo: conteudo,
            data_lancamento: data_lancamento}

            //Fazendo a requisição para o backend
            
            axios.post('/api/edit', editnoticia)
            .then((response) => {
                Swal.fire('Feito', 'Notícia Alterada com sucesso')
                setInterval(() => {
                    navegar('/')
                }, 3000);
                
            }
            ).catch((error) => {
                console.log(error);
            })
        }
    
    //Retornando o formulário para edição da notícia

    return (
        
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
                    <input type="date" className="form-control" id="data" value={moment(data_lancamento).format('YYYY-MM-DD')} onChange={(e) => {setData(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <button onClick={editarNoticia} className="btn">Editar</button>
                </div>
            </div>

        
        </div>

    )
}

export default EditarNoticia;
