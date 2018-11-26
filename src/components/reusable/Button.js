
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = (props) => {

    const {buttonStyle , textStyle} = styles
    return (
        <TouchableOpacity onPress = {props.onPress} style={[buttonStyle, props.style]}>
            <Text style = {textStyle}>{props.children}</Text>
        </TouchableOpacity>
    );
};



const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#76FF03',
        marginLeft: 5,
        marginRight: 5

    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10
    }

};

export {Button};