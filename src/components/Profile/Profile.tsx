import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2023/10/11/11/42/coast-8308438_1280.jpg" alt="main-image"/>
            </div>

            <MyPosts/>
        </div>
    );
};

