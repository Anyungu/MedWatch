import React from 'react';
import {View, Text, Modal} from 'react-native';
import {Button} from './Button';
import {CardSection} from './CardSection';



const ConfirmModal = ({children, visible, onAccept, onDecline}) =>  {
    
    const {containerStyle, textStyle, cardSectionStyle} = styles;
        return (
             <Modal
             visible={visible}
             transparent
             animationType = "slide"
             onRequestClose = {() => {}}
             >
                 <View style={containerStyle} >

                    <CardSection style = {cardSectionStyle}>

                        <Text style ={textStyle} >
                            {children}
                        </Text>

                    </CardSection> 

                    <CardSection>
                        <Button onPress = {onAccept}>
                            Yes
                        </Button>

                        <Button onPress = {onDecline}>
                            No
                        </Button>
                        
                    </CardSection>


                 </View>

             </Modal>
        );
    
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        flex: 1,
        lineHeight: 40
    },
    containerStyle:  {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex:1,
        justifyContent: 'center'
    }
};

export {ConfirmModal};