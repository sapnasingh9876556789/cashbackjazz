import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar,
  ScrollView
} from 'react-native';
import styles from "./style";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }



  render() {
    return (
      <View style={styles.contaner}>
        <View style={styles.header1}>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image source={require('../../../assets/images/threedotimage.png')}
              style={{
                width: 5,
                height: 21,
              }} />
          </TouchableOpacity>
          <Text style={{ left: 20, color: 'white', fontSize: 18 }}>Dashboard</Text>

        </View>
        <ScrollView>
          <View style={[styles.maincard, {marginTop:30}]}>
            <View style={styles.card}>
            <View style={{width:120,left:10, height:30, backgroundColor:'#2CB6E3', position:'absolute', top:-30, alignItems:'center'}}>
              <Text style={{fontSize:14, color:'white', top:5}}>cashback</Text>
            </View>
              <Image source={require('../../../assets/images/firstimage.png')}
                style={{
                  width: 80,
                  height: 80,
                }} />
              <Text style={styles.boxtext}>33:00</Text>
              <Text style={styles.boxtext}>confirmed cashback</Text>
            </View>

            <View style={styles.card2}>
            <View style={{width:120,left:10, height:30, backgroundColor:'#2CB6E3', position:'absolute', top:-30, alignItems:'center'}}>
              <Text style={{fontSize:14, color:'white', top:5}}>cashback</Text>
            </View>
              <Image source={require('../../../assets/images/fourtimage.png')}
                style={{
                  width: 40,
                  height: 35,
                }} />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.boxtext2}>33:00</Text>
                <Text style={styles.boxtext2}>confirmed cashback</Text>
              </View>
            </View>
          </View>

          <View style={styles.maincard}>
            <View style={styles.card2}>
            <View style={{width:120,left:10, height:30, backgroundColor:'#2CB6E3', position:'absolute', top:-30, alignItems:'center'}}>
              <Text style={{fontSize:14, color:'white', top:5}}>cashback</Text>
            </View>
              <Image source={require('../../../assets/images/fourtimage.png')}
                style={{
                  width: 40,
                  height: 35,
                }} />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.boxtext2}>33:00</Text>
                <Text style={styles.boxtext2}>confirmed cashback</Text>
              </View>
            </View>
            <View style={[styles.card, { top: -90 }]}>
            <View style={{width:120,left:10, height:30, backgroundColor:'#2CB6E3', position:'absolute', top:-30, alignItems:'center'}}>
              <Text style={{fontSize:14, color:'white', top:5}}>cashback</Text>
            </View>
              <Image source={require('../../../assets/images/fiveimage.png')}
                style={{
                  width: 80,
                  height: 80,
                }} />
              <Text style={styles.boxtext}>33:00</Text>
              <Text style={styles.boxtext}>confirmed cashback</Text>
            </View>
          </View>



          <View style={[styles.maincard, { top: -90 }]}>
            <View style={styles.card2}>
            <View style={{width:120,left:10, height:30, backgroundColor:'#2CB6E3', position:'absolute', top:-30, alignItems:'center'}}>
              <Text style={{fontSize:14, color:'white', top:5}}>cashback</Text>
            </View>
              <Image source={require('../../../assets/images/fourtimage.png')}
                style={{
                  width: 40,
                  height: 35,
                }} />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.boxtext2}>33:00</Text>
                <Text style={styles.boxtext2}>confirmed cashback</Text>
              </View>
            </View>
            <View style={styles.card}>
            <View style={{width:120,left:10, height:30, backgroundColor:'#2CB6E3', position:'absolute', top:-30, alignItems:'center'}}>
              <Text style={{fontSize:14, color:'white', top:5}}>cashback</Text>
            </View>
              <Image source={require('../../../assets/images/firstimage.png')}
                style={{
                  width: 80,
                  height: 80,
                }} />
              <Text style={styles.boxtext}>33:00</Text>
              <Text style={styles.boxtext}>confirmed cashback</Text>
            </View>
          </View>
          <View style={[styles.maincard, { top: -90 }]}>
          <View style={[styles.card, {top:-90}]}>
          <View style={{width:120,left:10, height:30, backgroundColor:'#2CB6E3', position:'absolute', top:-30, alignItems:'center'}}>
              <Text style={{fontSize:14, color:'white', top:5}}>cashback</Text>
            </View>
              <Image source={require('../../../assets/images/firstimage.png')}
                style={{
                  width: 80,
                  height: 80,
                }} />
              <Text style={styles.boxtext}>33:00</Text>
              <Text style={styles.boxtext}>confirmed cashback</Text>
            </View>
            <View style={styles.card2}>
            <View style={{width:120,left:10, height:30, backgroundColor:'#2CB6E3', position:'absolute', top:-30, alignItems:'center'}}>
              <Text style={{fontSize:14, color:'white', top:5}}>cashback</Text>
            </View>
              <Image source={require('../../../assets/images/fourtimage.png')}
                style={{
                  width: 40,
                  height: 35,
                }} />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.boxtext2}>33:00</Text>
                <Text style={styles.boxtext2}>confirmed cashback</Text>
              </View>
            </View>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}
