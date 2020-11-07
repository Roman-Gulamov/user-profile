import React from 'react';
import { STAT_MAP } from './StatMap';

import Saba from '../../assets/images/Saba.png';
import { FollowSvg } from './Svg/FollowSvg';
import { FollowingSvg } from './Svg/FollowingSvg';

import { Button } from '../../styles/Button';
import { Header,
    HeaderImg,
    HeaderStat,
    StatInformation,
    StatItem,
    StatConnect,
    ConnectDirect,
    DirectMessage,
    ConnectFollow } from "../../styles/ProfileHeader";

    
export const ProfileHeader = ({ whiteTheme, message, handleMessage, subsStatus, handleSubscribe, status }) => {
    return (
        <Header>
            <HeaderImg>
                <img src={Saba} alt="Saba" />
            </HeaderImg>
            <HeaderStat>
                <StatInformation>
                    {STAT_MAP.map(({ id, count, title }) =>  
                        <StatItem key={id} whiteTheme={whiteTheme}>
                            <span>{count}</span>
                            <span>{title}</span>
                        </StatItem>
                    )}
                </StatInformation>
                <StatConnect>
                    <ConnectDirect disabled={message ? "disabled" : ""}>
                        <Button 
                            type="button" 
                            onClick={handleMessage} 
                            disabled={message ? "disabled" : ""}
                        >Message
                        </Button>
                        <DirectMessage message={message}>
                            Saba has restricted sending messages
                        </DirectMessage>
                    </ConnectDirect>
                    <ConnectFollow subsStatus={subsStatus} whiteTheme={whiteTheme}>
                        <Button 
                            type="button" 
                            onClick={handleSubscribe} 
                            disabled={status === "Loading.." ? "disabled" : ""}
                        >  
                            <FollowSvg />
                            <FollowingSvg />
                            <span>{status}</span>
                        </Button>
                    </ConnectFollow>
                </StatConnect>
            </HeaderStat>
        </Header>
    )
}
