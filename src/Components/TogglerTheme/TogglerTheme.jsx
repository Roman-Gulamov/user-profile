import React from 'react';
import Toggle from 'react-toggle';

import { ToggleWrapper } from '../../styles/TogglerTheme';
import "react-toggle/style.css";


export const TogglerTheme = ({ handleTheme, whiteTheme }) => {
    return (
        <ToggleWrapper>
            <Toggle
                checked={whiteTheme ? true : false}
                onChange={handleTheme}
            />
        </ToggleWrapper>
    )
}
