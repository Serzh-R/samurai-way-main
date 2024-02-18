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
import {StoreProps} from './redux/State';


type AppProps = {
    store: StoreProps
}

const App: React.FC<AppProps> = (props) => {

    const state = props.store.getState()

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

                <Route path={'/dialogs'} render={() => <Dialogs
                    state={state.dialogsPage}
                    dispatch={props.store.dispatch.bind(props.store)}
                />}
                />
                <Route path={'/profile'} render={() => <Profile
                    newPostText={state.profilePage.newPostText}
                    profilePage={state.profilePage}
                    dispatch={props.store.dispatch.bind(props.store)}
                    /*updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                    addPost={props.store.addPost.bind(props.store)}*/
                />}
                />

                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>

            </div>
        </div>
    );
}

export default App;

