//Router page. Has Routes to all components that qualify as pages

import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import loginPage from './components/loginPage';
import landingPage from './components/landingPage';
import registerPage from './components/registerPage';


const RouterComponent = () => {

    return(
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="auth">
                    
                    <Scene 
                    key = "landingPage" 
                    component= {landingPage}
                    hideNavBar
                    initial
                    /> 

                    <Scene 
                    key = "loginPage"
                    component= {loginPage}
                    title ="Please Log in" 
                    hideNavBar
                    /> 

                    <Scene 
                    key = "registerPage" 
                    component= {registerPage}
                    title ="Add details" 
                    hideNavBar
                    /> 
                </Scene>


                
                
            </Scene>
        </Router>
    );

};

export default RouterComponent;
