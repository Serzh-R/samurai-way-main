import {ActionsType, ProfilePageProps} from './State';

export const profileReducer = (state: ProfilePageProps, action: ActionsType): ProfilePageProps => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }

}

export type ProfileActionsType = AddPostActionType | UpdateNewPostTextActionType

type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = (postText: string) => {
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