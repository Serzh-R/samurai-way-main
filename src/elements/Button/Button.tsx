import React from 'react';
import s from './Button.module.css'

type ButtonProps = {
    name: string
    onClick: () => void
}
export const Button = ({name, onClick}: ButtonProps) => {

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button className={s.button} onClick={onClickHandler}>{name}</button>
    );
};

