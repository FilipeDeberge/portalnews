import React from "react";

//Tela de login
const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="login">
                        <h1>Login</h1>
                        <form action="/api/login" method="POST">
                            <div className="form-group">
                                <label htmlFor="usuario">Usuário</label>
                                <input type="text" className="form-control" id="usuario" name="usuario" placeholder="Digite seu usuário"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" className="form-control" id="senha" name="senha" placeholder="Digite sua senha"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Login;