import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsProps} from '../../../redux/State';
import {Button} from '../../../elements/Button';
import {text} from 'node:stream/consumers';


type MyPostsProps = {
    posts: PostsProps[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export const MyPosts = (props: MyPostsProps) => {

    const postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost();
        if (newPostElement.current) {
            newPostElement.current.value = '';
        }
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value ?? '';
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange}/>
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

