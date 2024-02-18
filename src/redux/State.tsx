export type DialogsProps = {
    id: number;
    name: string;
}

export type MessagesProps = {
    id: number
    message: string
}

export type PostsProps = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageProps = {
    posts: PostsProps[]
    newPostText: string
}

export type DialogsPageProps = {
    messages: MessagesProps[]
    dialogs: DialogsProps[]
    newMessageBody: string
}

export type RootStateProps = {
    profilePage: ProfilePageProps
    dialogsPage: DialogsPageProps
    sidebar: {}
}

export type StoreProps = {
    _state: RootStateProps
    //updateNewPostText?: (newText: string) => void
    //addPost?: () => void
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateProps
    dispatch: (action: ActionsType) => void
}

export const store: StoreProps = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It`s my first post', likesCount: 11},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'No'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },
    _callSubscriber() {
        //console.log('state change')
    },

    getState() {
        return this._state;
    },
    subscribe(callback) {
        this._callSubscriber = callback;  // callback observer - паттерн наблюдатель за rerenderEntireTree
    },

   /* addPost() {
        const newPost: PostsProps = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._onChange();

    },*/
    /*updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._onChange();
    },*/

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsProps = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY'){
            this._state.dialogsPage.newMessageBody = action.newMessageBody
            this._callSubscriber();
        } else if (action.type === 'SEND-MESSAGE'){
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 7, message: body})
            this._callSubscriber();
        }
    }
}

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType

type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = (postText: string) =>{
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (newMessageBody:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageBody: newMessageBody
    } as const
}

type SendMessageActionType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'

    } as const
}
//window.store = store

// ************************************************** //
/*let rerenderEntireTree = () => {

}*/

/*export const subscribe = (callbackObserver: () => void) => {
    rerenderEntireTree = callbackObserver;  // observer - паттерн наблюдатель
}*/

/*export const state: RootStateProps = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It`s my first post', likesCount: 11},
        ],
        newPostText: '',
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'No'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},

        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
    },
    sidebar: {},
}*/

/*export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}*/

/*export const addPost  = () => {

    const newPost: PostsProps = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();

}*/



