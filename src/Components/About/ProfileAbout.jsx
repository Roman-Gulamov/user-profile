import React from 'react';

import { About,
    AboutName,
    AboutStatus,
    AboutDescription,
    DescriptionHeader,
    DescriptionHashtag,
    AboutLink } from "../../styles/ProfileAbout";

export const ProfileAbout = ({ whiteTheme }) => {
    return (
        <About>
            <AboutName>Saba</AboutName>
            <AboutStatus whiteTheme={whiteTheme}>Band / Musician</AboutStatus>
            <AboutDescription>
                <DescriptionHeader>
                    <div>
                        Pivotgang 
                        <span role="img" aria-label="basketball"> &#127936;</span>
                    </div>
                    <div>   
                        Care for me tour out 
                        <span role="img" aria-label="microphone"> &#127897;</span>
                    </div>
                </DescriptionHeader>
                <DescriptionHashtag 
                    href="https://yandex.ru/search/?text=Chi-town&lr=2"
                    target="_blank"
                >
                    #Chi-town
                </DescriptionHashtag>
                    <div>This remind me or before we had insomnia</div>
                    <div>Sleepin' peacefully, never needed a pile of drugs</div>
            </AboutDescription>
            <AboutLink href="http://pivotgang.com" target="_blank">pivotgang.com</AboutLink>
        </About>
    )
}
