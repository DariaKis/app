import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPots";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPotsContainer";
import DialoguesContainer from "../Dialogues/DialoguesContainer";

const Profile = (props) => {

    return <div>

        <ProfileInfo/>
        <MyPostsContainer />
        {/*<DialoguesContainer store={props.store}/>*/}

    </div>
}

export default Profile;