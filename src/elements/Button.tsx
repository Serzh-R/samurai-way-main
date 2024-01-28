import React from 'react';

type ButtonProps = {
    name: string
    onClick: () => void
}
export const Button = ({name, onClick}: ButtonProps) => {

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};

