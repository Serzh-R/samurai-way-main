import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionsType, addPostAC, PostsProps, updateNewPostTextAC} from '../../../redux/State';
import {Button} from '../../../elements/Button/Button';


type MyPostsProps = {
    newPostText: string
    posts: PostsProps[]
    //addPost: () => void
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}
export const MyPosts = (props: MyPostsProps) => {

    const postsElements =
        props.posts.map(p =>
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        // props.addPost();
        props.dispatch(addPostAC(props.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        //props.updateNewPostText(text)
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <Button name={'Add post'} onClick={addPost}/>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

