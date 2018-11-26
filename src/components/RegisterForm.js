
import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {CardSection, Input } from './reusable';
import {connect} from 'react-redux';
import {typedValue} from '../actions';

class RegisterForm extends Component {
    render () {

        const {containerStyle, cardSectionStyle} = styles;
        return (

            <View style = {containerStyle}>
                <CardSection style = {cardSectionStyle} >
                    <Input 
                        label={'Name'} 
                        placeholder={'Username'} 
                        placeholderTextColor = {'white'} 
                        icon={true} 
                        iconName={'user-tie'}
                        value = {this.props.name}
                        onChangeText = {value => this.props.typedValue({prop:'name' , value})}
                    />
                </CardSection>

                <CardSection style = {cardSectionStyle} >
                    <Input 
                        label={'Name'} 
                        placeholder={'email@host.com'} 
                        placeholderTextColor = {'white'} 
                        icon={true} 
                        iconName={'address-card'}
                        value = {this.props.email}
                        onChangeText = {value => this.props.typedValue({prop:'email' , value})}
                    />
                </CardSection>

                <CardSection style = {cardSectionStyle} >
                    <Input 
                        label={'Name'} 
                        placeholder={'Password'} 
                        secureTextEntry 
                        placeholderTextColor = {'white'} 
                        icon={true} 
                        iconName={'lock'}
                        value = {this.props.password}
                        onChangeText = {value => this.props.typedValue({prop:'password' , value})}
                    />
                </CardSection>

                <CardSection style = {cardSectionStyle} >
                    <Input 
                        label={'Name'} 
                        placeholder={'Confirm Password'} 
                        secureTextEntry 
                        placeholderTextColor = {'white'} 
                        icon={true} 
                        iconName={'unlock'}
                        value = {this.props.confirm}
                        onChangeText = {value => this.props.typedValue({prop:'confirm' , value})}
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
        width: width
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

const mapStateToProps = ({ registerAction}) => {

    const {name, email, password, confirm} =  registerAction;

    return {name, email, password, confirm};

};




export default connect (mapStateToProps, {typedValue}) (RegisterForm);