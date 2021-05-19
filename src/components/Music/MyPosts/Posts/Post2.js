import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return <div className= {classes.content}>
        <div>
        <img src="https://i.pinimg.com/originals/df/00/63/df0063d6eb83d49546ada8cd482df37e.jpg"/>
        </div>

        <div>
         ava+description
        </div>

        <div className= {classes.post}>
            My post
            <div className={classes.item}>
                post1
            </div>
            <div className={classes.item}>
                post2
            </div>
        </div>
    </div>
}

export default Profile;