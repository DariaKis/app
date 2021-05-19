import React from "react";
import classes from "./Post1.module.css";

const Post1 = (props) => {
    return <div className={classes.item}>
        <img src="https://www.shecos.com/blog/wp-content/uploads/2019/06/darla-finding-nemo-costume.jpg" alt={""}/>
        {props.message}

        <div>
           like {props.likesCount}
        </div>


    </div>

}

export default Post1;
