import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import 'fontsource-roboto';

import MainPage from "./panels/MainPage";
import {CssBaseline} from "@material-ui/core";

function App() {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#1676FF'
            },
            yellow: {
              main: '#F6AE3F'
            },
            background: {
                default: '#F4F6FF',
                paper: '#fff'
            }
        },

    });

    return (

        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
                <Route exact path="/" render={() => <MainPage />}/>
            </Switch>
        </MuiThemeProvider>

    );
}

export default App;
