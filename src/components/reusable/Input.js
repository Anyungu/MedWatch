
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Input = ({icon, iconName ,value, onChangeText, placeholder, secureTextEntry, placeholderTextColor}) => {

   
   
    
    const {inputstyle, labelStyle, containerStyle} = styles;

    return (
        <View style = {containerStyle}>
            <Text style={labelStyle}>
                  <FontAwesome5 name={iconName} size={30} color="white"/>
            </Text>
            <TextInput 
                secureTextEntry = {secureTextEntry}
                placeholder = {placeholder}
                autoCorrect = {false}
                style = {inputstyle}
                value={value} 
                onChangeText ={onChangeText} 
                placeholderTextColor = {placeholderTextColor}
            />

        </View>

    );

};




const styles = {
    inputstyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 5,
        flex: 1
    },
    containerStyle:  {
        flex:1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export {Input}; 