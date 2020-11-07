import styled from 'styled-components';


export const Button = styled.button`
    font-size: 1.1em;
    font-weight: 500;
    letter-spacing: 0.6px;
    border: none;
    border-radius: 2.5em;
    cursor: pointer;
    background-color: rgba(84, 88, 247, 1);
    color: #fff;
    transition: background-color 0.4s ease;
    
    @media screen and (max-width: 768px) {
        font-size: 1em;
    }

    &:hover {
        background-color: rgba(84, 88, 247, 0.7);
    }


    &:active:enabled {
        transform: scale(0.9);
    }
`