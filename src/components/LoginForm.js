
import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {CardSection, Input } from './reusable';
import {typedValueLogin} from '../actions';
import {connect} from 'react-redux';

class RegisterForm extends Component {
    render () {

        const {containerStyle, cardSectionStyle} = styles;
        return (

            <View style = {containerStyle}>
                <CardSection style = {cardSectionStyle} >
                    <Input label={'Email'} 
                            placeholder={'youremail@host.com'} 
                            placeholderTextColor = {'white'} 
                            icon={true} 
                            iconName={'address-card'}
                            value = {this.props.email}
                            onChangeText = {value => this.props.typedValueLogin({prop:'name' , value})}

                    />
                </CardSection>

                
                <CardSection style = {cardSectionStyle} >
                    <Input label={'Password'} 
                            placeholder={'Password'} 
                            secureTextEntry 
                            placeholderTextColor = {'white'} 
                            icon={true} 
                            iconName={'lock'}
                            value = {this.props.password}
                            onChangeText = {value => this.props.typedValueLogin({prop:'name' , value})}
                    />
                </CardSection>

                

            </View>
        );
    }
}


export const { width, height } = Dimensions.get('window');

const styles = {
    containerStyle:{
        flex:1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardSectionStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#263238',
        borderBottomWidth: 1,
        borderColor: '#008cff'
    },
}

const mapStateToProps = ({loginAction}) => {

    const {email, password, loading, error} =  loginAction;

    return  {email, password, loading, error};

};


export default connect (mapStateToProps, {typedValueLogin})(RegisterForm);