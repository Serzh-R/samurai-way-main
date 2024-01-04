import React from 'react';
import s from './Post.module.css';


type PostPropsType = {
    message: string
    likesCount:string
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbVXKD4jehXtmLvVrvUlJf0oaW9gPk0YItbundagrBfveeCmKQNqVzzbYAZHcH0q4Pkw&usqp=CAU'/>
            {props.message}
            <div>
                <span>like </span>{ props.likesCount}
            </div>

        </div>
    );
};

