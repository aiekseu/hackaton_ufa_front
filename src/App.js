import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import 'fontsource-roboto';

import MainPage from "./panels/MainPage";

function App() {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#1676FF'
            },
            background: {
                default: '#d9d9d9',
                paper: '#fff'
            }
        }
    });

    return (

        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" render={() => <MainPage/>}/>

            </Switch>
        </MuiThemeProvider>

    );
}

export default App;
