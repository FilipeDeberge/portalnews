import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const moment = require("moment");

//Componente para exibir as notícias
const CardNoticia = ({noticia}) => {

    //Declarando constante para navegação
    const navegar = useNavigate()

    //Função para deletar a notícia
    const deletarnoticia = (id) => {
        Swal.fire({
            title: 'Tem certeza que deseja deletar?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim, deletar!'
            }).then((result) => {
                if (result.isConfirmed) {

                    //Fazendo a requisição para o backend
                    axios.post('/api/deletar', {_id:id})
                    .then((response) => {
                        Swal.fire(
                            'Deletado!');      
                    }
                    ).catch((error) => {
                        console.log(error);
                    })
                }
                navegar(0);
            })
    }

    return (
        
        //Retornando o card com os dados da notícia
        <div className="card">
        <div className="card-body">
            <h2 className="card-title">{noticia.titulo}</h2>
            <p className="card-text">{noticia.conteudo}</p>
            <p className="card-data">Data da Publicação: {moment(noticia.data_lancamento).format("DD/MM/YYYY")}</p>
            <ul className="btns">
                <li>
                    <Link to={`/api/edit/${noticia._id}`}><button className="btn_editar"></button></Link></li>
                    &nbsp;
                <li>
                    <button className="btn_deletar" onClick={()=>{deletarnoticia(noticia._id)}}></button>
                </li>
            </ul>
            
        </div>
        </div>
    );
    }

export default CardNoticia;