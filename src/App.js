import React, {useState} from 'react';
import {Switch, Route, useParams, Router} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import 'fontsource-roboto';

import MainPage from "./panels/MainPage";
import {CssBaseline} from "@material-ui/core";
import CalendarPage from "./panels/CalendarPage";
import {Provider} from "react-redux";

import history from './services/history'

function App() {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#1676FF'
            },
            background: {
                default: '#F4F6FF',
                paper: '#fff'
            }
        }
    });

    return (
        <MuiThemeProvider theme={theme}>
            <Router history={history}>
                <CssBaseline/>
                <Switch>
                    <Route exact path="/" render={() => <MainPage/>}/>
                    <Route path="/calendar/:roomN" render={() => <CalendarPage/>}/>
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
