
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, CardSection} from './reusable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {loggingInUser} from '../actions';
import Spinner from './reusable';




class registerPage extends Component {

   
    onLoginPress () {
        const {email, password} = this.props;

        this.props.loggingInUser({ email, password})
    }

    loginWithFacebook () {
        
    }

    loginWithTwitter () {
        
    }

    loginWithGoogle () {
        
    }

    buttonOrSpinner () {
        const {buttonStyle} = styles;

        const {loading} = this.props;

        if (loading) {
            <Spinner color= '#008cff'/>
        }
            <Button style= {buttonStyle}  onPress = {this.onRegisterPress.bind(this)}>
                Register
            </Button>


    }

    render() {

        const {containerStyle, upperStyle, upperIconStyle, lowerStyle, lowerSliderStyle, cardSectionStyle} = styles;

        return (
            <View style = {containerStyle} >

                <View style = {upperStyle}>

                    <View style={upperIconStyle}>
                        <FontAwesome5 name={'capsules'} size={90} color="#008cff"/> 
                    </View>
                    <View style={lowerSliderStyle}>
                        <LoginForm/>
                    </View>
        
                </View>

                <View style = {lowerStyle}>
                    <Text style = {{color:'Red', fontSize:12}}>{this.props.error}</Text>
                    <CardSection style = {cardSectionStyle}>
                          {this.buttonOrSpinner()}
                    </CardSection>

                    <CardSection style = {cardSectionStyle}>
                        <Text style = {{color:'white', fontSize:20}}>Or</Text>
                    </CardSection>

                    <CardSection style={cardSectionStyle}>
                        <Icon.Button    name="google--with-circle" 
                                        backgroundColor= 'transparent' 
                                        size = {60} color= 'white' 
                                        iconStyle={{borderRadius:10, borderColor:'red'}} 
                                        onPress={this.loginWithGoogle}
                        />
                        <Icon.Button    name="facebook-with-circle"  
                                        backgroundColor= 'transparent' 
                                        size= {60} 
                                        color=  'white' 
                                        iconStyle={{borderRadius:10, borderColor:'red'}} 
                                        onPress={this.loginWithFacebook}
                        />
                        <Icon.Button    name="twitter-with-circle" 
                                        backgroundColor= 'transparent' 
                                        size= {60} 
                                        color= 'white' 
                                        iconStyle={{borderRadius:10, borderColor:'red'}} 
                                        onPress={this.loginWithTwitter}
                        />
                    </CardSection>


                </View>
                
            </View>
        );
    }
}



const styles = {
    containerStyle:{
        flex:1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#212121',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2 ,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBotton: 0

    },

    upperStyle: {
        flex:2.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#263238',
        
    },

    buttonStyle: {
        backgroundColor:'#263238',
        marginLeft: 0,
        marginRight: 0,
        borderColor: '#008cff'

    },

    cardSectionStyle: {
        justifyContent: 'center',
        flowDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#263238',
        borderBottomWidth: 0
    },

    lowerStyle: {
        flex:1.5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#263238'
    
    },

    lowerSliderStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:2
    },

    upperIconStyle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex:1
    },

    iconButtonStyle: {

        borderColor: '#008cff'

    }
        

};



const mapStateToProps = ({loginAction}) => {

    const {email, password, loading, error} =  loginAction;

    return  {email, password, loading, error};

};


export default connect (mapStateToProps, {loggingInUser}) (registerPage);

