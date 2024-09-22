import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

interface FormLoginProps extends React.ComponentPropsWithoutRef<'form'> { }

// Estilo Global
export const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    color: #023047;
  }
`;

// Container da página
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: blue;
`;

// Formulário de Login
export const FormLogin = styled.form<FormLoginProps>`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 7px;
  padding: 40px;
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
  gap: 5px;
`;

// Estilo para a área do login
export const AreaLoginImg = styled.img`
  width: 420px;
`;

// Estilo para o título do formulário
export const FormLoginTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 2.3em;
`;

// Parágrafo do formulário
export const FormLoginText = styled.p`
  display: inline-block;
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
`;

// Input do formulário
export const FormLoginPlace = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  padding: 15px;
  font-size: 14px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  margin-top: 5px;
  border-radius: 4px;
  transition: all linear 160ms;
  outline: none;

  &:focus {
    border: 1px solid #f72585;
  }
`;

// Label do formulário
export const FormLoginLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

// Link do formulário
export const FormLoginLinkk = styled.a`
  display: inline-block;
  margin-bottom: 20px;
  font-size: 13px;
  color: #555;
  transition: all linear 160ms;

  &:hover {
    color: #f72585;
  }
`;

// Botão de enviar
export const SubmitButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: #f72585;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none!important;
  transition: all linear 160ms;
  cursor: pointer;
  margin: 0!important;
  height: 50px;
  width: 100%;
  
  &:hover {
    transform: scale(1.05);
    background-color: #ff0676;
  }
`;
