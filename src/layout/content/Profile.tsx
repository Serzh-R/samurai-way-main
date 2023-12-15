import React from 'react';
import styled from 'styled-components';

export const Profile = () => {
    return (
        <StyledProfile>
            <img src="https://cdn.pixabay.com/photo/2023/10/11/11/42/coast-8308438_1280.jpg" alt="main-image"/>
            <div>
                <img src="https://tdzoo.ru/_mod_files/ce_images/articles/dsc_3421a_0.jpg" alt="avatar"/>
                <p></p>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>
            <div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </StyledProfile>
    );
};

const StyledProfile = styled.div`
    grid-area: c;
    background-color: crimson;
    div img{
        width: 100px;
    }
`