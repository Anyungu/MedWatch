
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style= {viewStyle}>
            <Text style = {textStyle}>{props.headerText}</Text>
        </View>
    );
};



const styles = {
    textStyle:{
        fontSize: 25
    },

    viewStyle: {
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        height : 60 ,
        shadowColor: '#33691E',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.6 ,
        elevation: 2,
        position: 'relative',


    }

};

export {Header};