import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageProps} from '../../redux/State';



type ProfileProps={
    state: ProfilePageProps
}

export const Profile = (props: ProfileProps) => {


    return (
        <div>
           <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};

