import React from 'react';
import "./UserInfo.css";
import anime from "../../assets/images/user-avatar/anime.jpg";

function UserInfo() {
    return (
        <div className="profile-page">
            {/*Left column*/}
            <div className="profile-page-left-column">
                <div className="profile-page-user-image">
                    <img src={anime} alt="avatar"/>
                </div>
                <div className="profile-page-user-workplace">
                    <div className="profile-page-user-title">
                        Work
                    </div>
                    <div className="profile-page-user-address-content">
                        <div className="profile-page-user-work-location">
                            New York
                        </div>
                        <div className="profile-page-user-workplace-button">
                            Primary
                        </div>
                    </div>

                    <div className="profile-page-user-work-address">District 7 , HCMC</div>
                </div>
            </div>
            {/*Right column*/}
            <div className="profile-page-right-column">
                <div className="profile-page-user-name">Vo Thanh Luan</div>
                <p className="profile-page-user-role">Front end Developer</p>
                <div className="profile-page-user-contact-info">

                </div>
                <div className="profile-page-user-basic-info">

                </div>
            </div>
        </div>
    )
}

export default UserInfo;