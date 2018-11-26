import React, { Component } from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
 
import SwiperFlatList from 'react-native-swiper-flatlist';
 
class SliderComponent extends Component {
  render() {
    return (

      <View style={styles.container}>
        <SwiperFlatList
          
          index={2}
          showPagination
        >
          <View style={[styles.child, { backgroundColor: '#263238' }]}>
            <Text style={styles.text}>MedWatch is your Medical Partner. It will help you automatically Schedule your medicine time</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#263238' }]}>
            <Text style={styles.text}>Create an Account. Then Simply put in the name of your medicine and it's dosage</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#263238' }]}>
            <Text style={styles.text}>MedWatch will automatically schedule and will send you notification reminders when it's about time</Text>
          </View>
        </SwiperFlatList>
      </View>
    );
  }
}
 
export const { width, height } = Dimensions.get('window');
 
const styles = StyleSheet.create({
  container: {
    height: height * (0.25),
    backgroundColor: '#263238'
  },
  child: {
    height: height * (0.25),
    width: width,
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white'
  }
});

export default SliderComponent;