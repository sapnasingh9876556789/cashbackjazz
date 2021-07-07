import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions
} from 'react-native';
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

export default class NotificationsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit" },
        { id: 2, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit" },
        { id: 3, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit" },
        { id: 4, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit" },
        { id: 5, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit" },
        { id: 6, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit" },
        { id: 7, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit" },
        { id: 8, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit" },
        { id: 9, description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit" },
      ],
    };
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={{width:Width/1.1, height:180, backgroundColor:'white', borderRadius:10, alignSelf:'center', alignItems:'center', justifyContent:'center', marginTop:15}}>
          <Text style={styles.textheader}>Allow
            <Text style={{color:'#35C1F0', fontWeight:'bold',}}>Cashback</Text>
            to make and manage Phone calls
          </Text>
        </View>
        <FlatList
          style={styles.notificationList}
          enableEmptySections={true}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.notificationBox}>
                <Text style={styles.description}>Redemeble Points</Text>
                <View style={{}}>
                  <Text style={[styles.description, { textAlign: 'right' }]}>33.00</Text>
                  <Text style={[styles.description, { textAlign: 'right' }]}>Amount</Text>
                </View>
              </View>
            )
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC'
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: 45,
    height: 45,
  },
  description: {
    fontSize: 20,
    color: "black",
    marginLeft: 10,
    fontWeight: 'bold'
  },

  textheader: {
    fontSize: 25,
    color: '#0F4581',
    width:250,
    textAlign:'center'
  },
});
