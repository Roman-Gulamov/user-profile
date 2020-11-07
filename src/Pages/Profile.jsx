import React, { useState } from "react";

import { GlobalStyle } from '../styles/GlobalStyle';
import { Container } from "../styles/Container";
import { TogglerTheme } from '../Components/TogglerTheme/TogglerTheme';
import { ProfileHeader } from "../Components/Header/ProfileHeader";
import { ProfileAbout } from "../Components/About/ProfileAbout";


const Profile = () => {
    const [whiteTheme, setWhiteTheme] = useState(String(localStorage.getItem("White-Theme") || ""));
    const [message, setMessage] = useState(false);
    const [subsStatus, setSubsStatus] = useState(String(localStorage.getItem("Saba") || ""));
    const [status, setStatus] = useState(String(localStorage.getItem("Saba") || "Follow"));

    const handleTheme = () => {
        if (!whiteTheme) {
            localStorage.setItem("White-Theme", "White");
            setWhiteTheme(String(localStorage.getItem("White-Theme")));
        } else {
            localStorage.removeItem("White-Theme");
            setWhiteTheme("");
        } 
    }

    const handleMessage = () => !message ? setMessage(true) : false;

    const handleSubscribe = () => {
        if (!subsStatus) {
            setStatus("Loading..");
            localStorage.setItem("Saba", "Following");

            setTimeout(() => {
                setSubsStatus(String(localStorage.getItem("Saba")));
                setStatus(String(localStorage.getItem("Saba")));
            }, 1200);
        } else {
            setStatus("Loading..")
            localStorage.removeItem("Saba");

            setTimeout(() => {
                setSubsStatus("");
                setStatus("Follow");
            }, 1200);
        }
    }

    return (
        <>
        <GlobalStyle whiteTheme={whiteTheme} />
            <TogglerTheme handleTheme={handleTheme}  whiteTheme={whiteTheme} />
            <Container>
                <ProfileHeader
                    whiteTheme={whiteTheme}
                    message={message}
                    handleMessage={handleMessage}
                    subsStatus={subsStatus}
                    handleSubscribe={handleSubscribe}
                    status={status}
                />
                <ProfileAbout whiteTheme={whiteTheme} />
            </Container>
        </>
    );
}

export default Profile;
