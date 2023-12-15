import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return (
        <StyledHeader>
            <img
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1702425600&semt=sph"
                alt="logo"/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    grid-area: h;
    background-color: greenyellow;
    img{
        width: 20px;
    }
`