import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {RootStateProps, updateNewPostText} from './redux/State';


type AppProps = {
    state: RootStateProps
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App({state, addPost, updateNewPostText}: AppProps) {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

                <Route path={'/dialogs'} render={() => <Dialogs
                    state={state.dialogsPage}/>}
                />
                <Route path={'/profile'} render={() => <Profile
                    profilePage={state.profilePage}
                    updateNewPostText={updateNewPostText}
                    addPost={addPost}/>}
                />

                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>

            </div>
        </div>
    );
}

export default App;

