import styled, { css } from 'styled-components';
import { bounceInLeftAnimation } from './keyframes';


export const About = styled.section`
    animation: 2s ${bounceInLeftAnimation};
`

export const AboutName = styled.div`
    font-size: 1.5em;
    font-weight: 500;
    letter-spacing: 0.3px;
`

export const AboutStatus = styled.div`
    color: rgba(255, 255, 255, 0.6);
    margin: 0.2em 0 0.6em;

    ${props => props.whiteTheme && css`
        color: #9597A1;
    `}
`

export const AboutDescription = styled.div`
    margin-bottom: 1em;
    font-size: 0.9em;
    line-height: 1.4;
`

export const DescriptionHeader = styled.div`
    text-transform: uppercase;

    & span {
        font-size: 1em;
        width: 100%;
    }
`

export const DescriptionHashtag = styled.a`
    display: block;
    text-transform: uppercase;
`

export const AboutLink = styled.a`
    font-weight: 500;
`