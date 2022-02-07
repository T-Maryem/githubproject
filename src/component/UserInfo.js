import React from "react";
import './UserInfo.css';

const UserInfo = () => (

    <div className = "user__info">
        <img
            src = "https://avatars.githubusercontent.com/u/66577?v=4"
            className="p-2 avatar"
            width= "130"
            height = "130"
            alt = 'profileimage'
            />
            <div className="user__infoDetail">
                <h5>JakeWharton</h5>
                <div className= "user__infos">
                <div className = "user__infoDetail">
                    <i className="fa fa-map-marker pr-1">
                        <span>
                            Location .
                        </span>
                        </i>
                </div>
                <div className = "user__infoDetail">
                    <i className="fa fa-globe pr-1">
                        <span>
                            blog Url .
                        </span>
                        </i>
                </div>
                <div className = "user__infoDetail">
                    <i className="fa fa-envelope pr-1">
                        <span>
                            email .
                        </span>
                        </i>
                </div>
                <div className = "user__infoDetail">
                    <i className="fa fa-twitter pr-1">
                        <span>
                            Twitter Userid .
                        </span>
                        </i>
                </div>
                <div className = "user__infoDetail">
                    <i className="fa fa-group pr-1">
                        <span>
                            Followers .
                        </span>
                        </i>
                </div>
                <div className = "user__infoDetail">
                    <i className="fa fa-heart pr-1">
                        <span>
                            Following
                        </span>
                        </i>
                </div>
            </div>
     </div>
    </div>
  
    )

export default UserInfo;