import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings} from "@material-ui/icons";


export default function Topbar() {
    return (
        <div>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topleft">
                        <div className="logo">Admin</div>
                    </div>
                    <div className="topright">
                        <div className="topbarIconsContainer">
                            <NotificationsNone />
                            <span className="TopIconBadge">2</span>
                        </div>
                        <div className="topbarIconsContainer">
                            <Language />
                        </div>
                        <div className="topbarIconsContainer">
                            <Settings />
                        </div>
                        <img src="../Assets/images/jose.jpg" alt="My Photo" srcset="" className="topAvatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
