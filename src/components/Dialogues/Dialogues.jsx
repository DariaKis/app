import React from "react";
import classes from "./Dialogues.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";



const Dialogues = (props) => {

    let state = props.dialoguesPage;

    let dialogueElements = state.dialogues.map(dialogue=> <DialogueItem name={dialogue.name} key= {dialogue.id} id={dialogue.id}/>)
    let messageElements = state.messages.map(message=> <Message message ={message.message} key= {message.id}/> )
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();

    }
    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);

    }

    // let addPost = () => {
    //     let text = newPostElement.current.value;
    //     alert(text);
    // }

    return <div className={classes.dialogues}>
        <div className={classes.dialogueItems}>
            {dialogueElements}
        </div>

        <div className={classes.messages}>
            <div>{messageElements}</div>
            <div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder = 'Send your message'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} >Send</button>
                </div>
            </div>


        </div>

    </div>
}

export default Dialogues;