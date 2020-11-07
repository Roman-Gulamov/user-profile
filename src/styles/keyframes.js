import { keyframes } from 'styled-components';
import { bounceInLeft, fadeInLeft, fadeInDown } from 'react-animations';

export const bounceInLeftAnimation = keyframes`
    ${bounceInLeft}
`;

export const fadeInLeftAnimation = keyframes`
    ${fadeInLeft}
`;

export const fadeInDownAnimation = keyframes`
    ${fadeInDown}
`;