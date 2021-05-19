import React from "react";
import Post1 from "./Posts/Post1"




const MyPosts = (props) => {

    let postElements =
        props.posts.map( post => <Post1 message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };


    return (
        <div>
            My post
            <div>
                <textarea onChange={onPostChange} ref = {newPostElement}
                          value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost} >Add post</button>
                </div>
            </div>

            {postElements}

        </div>
    )
}

export default MyPosts;
