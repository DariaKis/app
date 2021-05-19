import {observe} from "web-vitals/dist/lib/observe";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hello, world!', likesCount: 10},
                {id: 2, message: 'It is my first post!', likesCount: 3},
            ],
            newPostText: "ЧТОТООЧЕНЬВАЖНОЕ",
        },

        dialoguesPage: {
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
        },

        sideBar: {},
    },
    _callSubscriber () {
        console.log('state is changed');
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },


    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);


        this._callSubscriber(this._state);

    },

};

    export default store;

    window.store = store;