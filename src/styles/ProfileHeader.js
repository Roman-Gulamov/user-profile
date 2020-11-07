import styled, { css } from 'styled-components';
import { fadeInLeftAnimation, fadeInDownAnimation } from './keyframes';

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5vh 0 7vh;

    @media screen and (max-width: 768px) {
        justify-content: space-evenly;
    }

    @media screen and (max-width: 500px) {
        flex-wrap: wrap;
        padding: 5vh 0 4vh;
    }
`

export const HeaderImg = styled.div`
    position: relative;
    width: 10em;
    height: auto;
    margin-right: 2em;
    animation: 1s ${fadeInLeftAnimation};

    @media screen and (max-width: 768px) {
        width: auto;
    }

    @media screen and (max-width: 500px) {
        margin-right: 0.5em;
        margin: 0em 0.5em 1em 0em;
    }
    
    &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 59%;
        background-color: rgba(255,255,255,0.2);
        filter: blur(5em);
    }

    & img {
        width: 100%;

        @media screen and (max-width: 768px) {
            width: 7em;
        }
    }
`

export const HeaderStat = styled.div`
    display: flex;
    flex-direction: column;
    animation: 1.2s ${fadeInDownAnimation};

    @media screen and (max-width: 500px) {
        animation: 1s ${fadeInLeftAnimation};
    }
`

export const StatInformation = styled.div`
    display: flex;
    justify-content: space-around;
`

export const StatItem = styled.div`
    margin-bottom: 1em;

    & span {
        display: block;
        text-align: center;

        &:first-child {
            font-size: 1.5em;
            font-weight: 500;
            text-transform: uppercase;

            @media screen and (max-width: 768px) {
                font-size: 1.2em;
            }
        }

        &:last-child {
            font-size: 1.2em;
            text-transform: capitalize;
            color: rgba(255, 255, 255, 0.6);

            ${props => props.whiteTheme && css`
                color: #9597A1;
            `}
            
            @media screen and (max-width: 768px) {
                font-size: 1em;
            }
        }
    }
`

export const StatConnect = styled.div`
    display: flex;
`

export const ConnectDirect = styled.div`
    position: relative;
    margin-right: 1em;

    & button {
        padding: 0.4em 3.8em;

        @media screen and (max-width: 768px) {
            padding: 0.4em 2.5em;
        }

        ${props => props.disabled && css`
            background-color: rgba(128, 128, 128, 0.6);

            &:hover {
                background-color: rgba(128, 128, 128, 0.6);
            }
        `}
    }
`

export const DirectMessage = styled.p`
    display: none;
    font-size: 0.8em;
    position: absolute;
    text-align: center;
    color: #b53737;
    
    ${props => props.message && css`
        display: block;
    `}
`

export const ConnectFollow = styled.div`
    & button {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 0.5em 1.6em;
        color: #fff;
        
        @media screen and (min-width: 768px) {
            min-width: 10em;
            padding: 0.55em 2.1em;
        }

        & svg:last-of-type {
            display: none;
        }

        & span {
            font-size: 0.85em;

            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    }

    ${props => props.subsStatus && css`
        & button {
            background-color: rgba(255, 255, 255, 0.1);
            color: black;

            &:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
        }

        & button svg {
            &:first-child {
                display: none;
            }

            &:last-of-type {
                display: inline-flex;

                @media screen and (min-width: 768px) {
                    margin-right: 0.2em;
                }
            }
        }
    `}

    ${props => props.whiteTheme && css`
        & button {
            border: 1px solid #f1e1f1;

            @media screen and (min-width: 768px) {
                & svg {
                    display: none;
                }
            }
        }

        & svg path {
            stroke: ${props => props.subsStatus ? "#5458F7" :  "white"};
        }
    `}
`