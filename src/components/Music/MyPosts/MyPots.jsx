import React from "react";
import classes from "./MyPosts.module.css";
import Post1 from "./Posts/Post1"

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea> </textarea>
                <button>Add post</button>
            </div>
            <Post1 message='Hello!How are you?'/>
            <Post1 message='It is my first post!'/>

        </div>
    )
}

export default MyPosts;
