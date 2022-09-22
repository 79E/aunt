import React from "react";
import { Segmented, AuntIconTwitter, AuntIconYoutube, AuntIconTwitch, AuntIconGithub } from 'aunt';
import './index.less';

export default ()=> (
    <Segmented.Group>
        <Segmented value='Twitter'>
            <div className="segmented-card">
                <AuntIconTwitter />
                <span>
                    Twitter
                </span>
            </div>
        </Segmented>
        <Segmented value='Youtube'>
            <div className="segmented-card">
                <AuntIconYoutube />
                <span>
                    Youtube
                </span>
            </div>
        </Segmented>
        <Segmented value='Twitch'>
            <div className="segmented-card">
                <AuntIconTwitch />
                <span>
                    Twitch
                </span>
            </div>
        </Segmented>
        <Segmented value='Github'>
            <div className="segmented-card">
                <AuntIconGithub />
                <span>
                    Github
                </span>
            </div>
        </Segmented>
    </Segmented.Group>
);