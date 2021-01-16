import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import greenTheme from "./themes/greenTheme";
import Dashboard from "../app/dashboard";


function MainContainer({loading}) {
    let applyTheme = createMuiTheme(greenTheme);
    console.log('test');
    return (
        <MuiThemeProvider theme={applyTheme}>
            <div className="app-main">
                <Switch>
                    <Route path='/' component={Dashboard}/>
                </Switch>
            </div>
        </MuiThemeProvider>
    );
}


// map state to props
const mapStateToProps = ({ generalReducer }) => {
    const { loading } = generalReducer;
    return { loading };
};

export default connect(mapStateToProps)(MainContainer);
