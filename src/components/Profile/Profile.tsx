import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageProps} from '../../redux/State';


type ProfileProps = {
    profilePage: ProfilePageProps
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}/>
        </div>
    );
};

