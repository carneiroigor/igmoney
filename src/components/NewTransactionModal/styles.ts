import styled from 'styled-components';
import { darken } from 'polished';
import { transparentize } from 'polished';
export const Container = styled.form `
    h2 {
        color: var(--text-body);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--light-grey);
        border-radius: 0.10rem;
        border: 1px solid #0c0c0c;
        font-weight: 400;
        font-size: 1rem;
        color: #fff;

        & + input {
            margin-top: 1rem;
        }

        &::placeholder {
            color: #8c8c8c;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div `
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    $isActive: boolean;
    $activeColor: 'green' | 'red';
}
const colors = {
    green: '#33CC95',
    red: '#e52e4d'
}
export const RadioBox = styled.button<RadioBoxProps> `
    height: 4rem;
    border: 1px solid #0c0c0c;
    border-radius: 0.10rem;
    color: #fff;

    background: ${(props) => props.$isActive 
    ? transparentize(0.9, colors[props.$activeColor])
    : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
    width: 20px;
    height: 20px;
    }

    span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    }

    transition: border-color 0.2s;
    &:hover {
    border-color: ${darken(0.1, '#0c0c0c')};
    }
`;