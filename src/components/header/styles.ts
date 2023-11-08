import styled from 'styled-components';

export const Container = styled.header `
    background: var(--dark-grey)
`;

export const Content = styled.div `
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--background);
        border: 0;
        padding: 0 2rem;
        border-radius: .3rem;
        height: 3rem;
        box-shadow: 0;

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }
`;