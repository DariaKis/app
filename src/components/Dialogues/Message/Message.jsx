import React from "react";
import classes from "./../Dialogues.module.css";




const Message = (props) => {
    return <div className={classes.dialogue}>{props.message}</div>


}

export default Message;