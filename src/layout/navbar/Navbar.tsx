import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
    return (
        <StyledNavbar>
            <ul>
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Messages</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
                <li>
                    <a href="#">Music</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
            </ul>
        </StyledNavbar>
    );
};

const StyledNavbar = styled.nav`
    grid-area: n;
    background-color: aqua;

`