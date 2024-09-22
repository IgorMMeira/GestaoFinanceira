import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as C from './styles';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setError("preencha todos os campos")
            return;
        }

        navigate('/sobre', { replace: true });
    }

    return (
        <C.Page>
            <C.FormLogin onSubmit={handleSubmit}>
                <C.FormLoginTitle>Login</C.FormLoginTitle>
                <C.FormLoginText>Digite os seus dados de acesso no campo abaixo.</C.FormLoginText>

                <C.FormLoginLabel >E-mail</C.FormLoginLabel>
                <C.FormLoginPlace type="email" placeholder="Digite seu e-mail" autoFocus onChange={(e) => {
                    setError("");
                    setEmail(e.target.value)
                }} />

                <C.FormLoginLabel >Senha</C.FormLoginLabel>
                <C.FormLoginPlace type="password" placeholder="Digite sua senha" onChange={(e) => {
                    setError("");
                    setPassword(e.target.value)
                }} />

                <C.SubmitButton type="submit">
                    Acessar
                </C.SubmitButton>

                {error != "" && <p>{error}</p>}
            </C.FormLogin>
        </C.Page>
    );
};

export default Login;