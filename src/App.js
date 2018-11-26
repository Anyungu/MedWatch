import React, {Component} from 'react';
import firebase from 'firebase';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';



class App extends Component {

  componentWillMount () {
    firebase.initializeApp({

    apiKey: "AIzaSyArQ9VortBoK5jOaHRG8OotCz0LM-0lzOg",
    authDomain: "personal-health-apot.firebaseapp.com",
    databaseURL: "https://personal-health-apot.firebaseio.com",
    projectId: "personal-health-apot",
    storageBucket: "",
    messagingSenderId: "1082455241437"
      
    });
  }


    render() {

      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
        <Provider store = {store}>

          
             <Router />      

          
         
        </Provider>
          

       
        
      );
    }
  }

  
  export default App; 
