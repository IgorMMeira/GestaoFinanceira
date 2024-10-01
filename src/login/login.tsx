import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';  // Importando os componentes estilizados
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Libs/firebase';  // Importando o auth inicializado

// Provedor do Google
const googleProvider = new GoogleAuthProvider();

const Login: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [formLogin, setFormLogin] = useState<boolean>(true); // Alternar entre login e cadastro

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Função para login com email e senha (valida no localStorage ou Firebase)
    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setError("Preencha todos os campos.");
            return;
        }

        if (!isValidEmail(email)) {
            setError("Por favor, insira um e-mail válido.");
            return;
        }

        setLoading(true); // Começando o processo de login
        setError(""); // Limpar erros anteriores

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        try {
            // Primeiro tenta fazer o login com as credenciais do localStorage
            if (email === storedEmail && password === storedPassword) {
                navigate('/sobre', { replace: true });
            } else {
                // Se falhar no localStorage, tenta no Firebase
                await signInWithEmailAndPassword(auth, email, password);
                navigate('/sobre', { replace: true });
            }
        } catch (err: any) {
            setError("Erro ao realizar login. Verifique suas credenciais.");
            console.error("Erro de autenticação:", err.message);
        } finally {
            setLoading(false);
        }
    };

    // Função para cadastro e armazenamento de credenciais no localStorage
    const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setError("Preencha todos os campos.");
            return;
        }

        if (!isValidEmail(email)) {
            setError("Por favor, insira um e-mail válido.");
            return;
        }

        // Armazenar o e-mail e senha no localStorage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        setError("");
        setFormLogin(true);
    };

    // Função para login com Google
    const handleGoogleLogin = async () => {
        setLoading(true);
        setError("");

        try {
            // Login com Google
            await signInWithPopup(auth, googleProvider);
            navigate('/sobre', { replace: true });
        } catch (err: any) {
            setError("Erro ao realizar login com Google.");
            console.error("Erro de autenticação com Google:", err.message);
        } finally {
            setLoading(false); // Concluir o processo de login com Google
        }
    };

    return (
        <C.Page>
            {formLogin ? (
                <C.FormLogin onSubmit={handleLoginSubmit}>
                    <C.FormLoginTitle>Login</C.FormLoginTitle>
                    <C.FormLoginText>Digite os seus dados de acesso no campo abaixo.</C.FormLoginText>

                    <C.FormLoginLabel>E-mail</C.FormLoginLabel>
                    <C.FormLoginPlace
                        type="email"
                        placeholder="Digite seu e-mail"
                        autoFocus
                        value={email}
                        onChange={(e) => {
                            setError("");
                            setEmail(e.target.value);
                        }}
                    />

                    <C.FormLoginLabel>Senha</C.FormLoginLabel>
                    <C.FormLoginPlace
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => {
                            setError("");
                            setPassword(e.target.value);
                        }}
                    />

                    <C.SubmitButton type="submit" disabled={loading}>
                        {loading ? 'Aguarde...' : 'Acessar'}
                    </C.SubmitButton>

                    <C.RegisterButton onClick={() => setFormLogin(false)}>
                        Cadastro
                    </C.RegisterButton>

                    {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
                </C.FormLogin>
            ) : (
                <C.FormLogin onSubmit={handleRegisterSubmit}>
                    <C.FormLoginTitle>Cadastro</C.FormLoginTitle>
                    <C.FormLoginText>Digite os seus dados de acesso no campo abaixo.</C.FormLoginText>

                    <C.FormLoginLabel>E-mail</C.FormLoginLabel>
                    <C.FormLoginPlace
                        type="email"
                        placeholder="Digite seu e-mail"
                        autoFocus
                        value={email}
                        onChange={(e) => {
                            setError("");
                            setEmail(e.target.value);
                        }}
                    />

                    <C.FormLoginLabel>Senha</C.FormLoginLabel>
                    <C.FormLoginPlace
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => {
                            setError("");
                            setPassword(e.target.value);
                        }}
                    />

                    <C.SubmitButton type="submit" disabled={loading}>
                        {loading ? 'Aguarde...' : 'Cadastrar'}
                    </C.SubmitButton>

                    {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
                </C.FormLogin>
            )}

            <C.GoogleButton onClick={handleGoogleLogin} disabled={loading}>
                {loading ? 'Aguarde...' : 'Login com Google'}
            </C.GoogleButton>
        </C.Page>
    );
};

export default Login;
