import {ActionsType, DialogsPageProps} from './State';

export const dialogsReducer = (state: DialogsPageProps, action: ActionsType): DialogsPageProps => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            return {
                ...state,
                newMessageBody: action.newMessageBody // Обновляем newMessageBody
            }
        }
        case 'SEND-MESSAGE': {
            let body = {
                id: new Date().getTime(),
                message: action.message
            }
            return {
                ...state,
                messages: [...state.messages, body],
                newMessageBody: ''
            }
        }
        default:
            return state
    }
}

export type DialogsActionsType = UpdateNewMessageBodyActionType | SendMessageActionType

type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (newMessageBody:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageBody
    } as const
}

type SendMessageActionType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = (id: number, message: string) => {
    return {
        type: 'SEND-MESSAGE',
        id,
        message
    } as const
}
