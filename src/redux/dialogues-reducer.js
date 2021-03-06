const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hey! What`s up?'},
        {id: 3, message: 'Hi!!!!'},
        {id: 4, message: 'How is your day?'},
        {id: 5, message: 'XDDDD'}
    ],

    dialogues: [
        {id: 1, name: 'Mira'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Vera'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Vova'}
    ],

    newMessageBody: " ",

}

const dialoguesReducer = (state = initialState, action) => {

    let stateCopy;
    //     ...state,
    //     messages : [ ...state.messages]
    // };


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            };

        default:
            return state;
    }

}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY , body: body})

export default dialoguesReducer;