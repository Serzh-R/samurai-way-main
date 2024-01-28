import {rerenderEntireTree} from '../render';

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
}

export type RootStateProps = {
    profilePage: ProfilePageProps
    dialogsPage: DialogsPageProps
    sidebar: {}
}

export const state: RootStateProps = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It`s my first post', likesCount: 11},
        ],
        newPostText: ' ',
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
}

export const addPost = () => {

    let newPost: PostsProps = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}