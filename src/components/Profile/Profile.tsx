import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePageProps} from '../../redux/State';


type ProfileProps = {
    newPostText: string
    profilePage: ProfilePageProps
    //addPost: () => void
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                newPostText={props.newPostText}
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                /* updateNewPostText={props.updateNewPostText}
               addPost={props.addPost}*/
                />
        </div>
    );
};

