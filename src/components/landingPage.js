
import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {Button, CardSection} from './reusable';
import {Actions} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SliderComponent from './SliderComponent';



class landingPage extends Component {

    onSignInPress () {
        
        Actions.loginPage();

    }

    onRegisterPress () {

        Actions.registerPage();
    }

    render() {

        const {containerStyle, upperStyle, upperIconStyle, lowerStyle, lowerSliderStyle, cardSectionStyle, buttonStyle} = styles;

        const { width } = Dimensions.get('window');

        return (
            <View style = {containerStyle} >

                <View style = {upperStyle}>

                    <View style={upperIconStyle}>
                        <FontAwesome5 name={'capsules'} size={90} color="#008cff"/> 
                    </View>
                    <View style={lowerSliderStyle}>
                        <SliderComponent/>
                    </View>
                    <View
                        style={{
                            borderTopColor: '#008cff',
                            borderTopWidth: 1,
                            width: width * (0.6),
                            flex:1,
                            marginTop:5
                        }}
                    />
        
                </View>

                <View style = {lowerStyle}>

                    <CardSection style = {cardSectionStyle}>
                        <Button style= {buttonStyle} onPress = {this.onSignInPress.bind(this)}>
                            Sign In
                        </Button>
                    </CardSection>

                    <CardSection style = {cardSectionStyle}>
                        <Button style= {buttonStyle}  onPress = {this.onRegisterPress.bind(this)}>
                            Register
                        </Button>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex:2.5
    },

    upperIconStyle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex:2.5
    },

        

};

export default landingPage;

