import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import styled from 'styled-components';
import {Navbar} from './layout/navbar/Navbar';
import {Profile} from './layout/content/Profile';


function App() {
    return (
        <AppWrapper>
            <Header />
            <Navbar />
            <Profile />
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
    display: grid;
    justify-content: center;
    width: 1200px;
    margin: 0 auto;

    grid-template-areas:
        "h h"
        "n c";

    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
`