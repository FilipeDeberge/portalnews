import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardNoticiaNaoLogado from './CardNoticiaNaoLogado';

//declaração da função que retorna as noticias

const NoticiasNaoLogado = () => {

    //função que retorna as noticias
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        //fazendo a requisição para a api
        axios.get('/api')
        .then((res) => {
            setNoticias(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    //verificando se a lista de noticias está vazia
    if (noticias.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <h1>Sem notícias por aqui...</h1>
                    </div>
                </div>
            </div>
        )
    }
    //mapeando a lista de noticias
    const listaNoticias = noticias.map((noticia) => {
    return (
        //retornando o card com os dados da notícia
        <div>
            <CardNoticiaNaoLogado noticia={noticia}/>
        </div>
    )
    });

    return (
        //retornando a lista de noticias
        <div className="container">
            <div className="row">
                {listaNoticias}
            </div>
        </div>
    );

}

export default NoticiasNaoLogado;