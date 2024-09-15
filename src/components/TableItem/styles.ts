import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`;
export const Button = styled.button`
    width: 45%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid red;
    border-radius: 5px;
    background-color: red;
    color: black;
    cursor: pointer;

    &:hover {
        opacity:0.7;
        color: white;
    }
`;
export const ButtonEdit = styled.button`
    width: 45%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid green;
    border-radius: 5px;
    background-color: green;
    color: black;
    cursor: pointer;
    margin-right:15px;

    &:hover {
        opacity:0.7;
        color: white;
    }
`;