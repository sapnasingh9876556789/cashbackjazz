import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: 'Accessories' },
        { id: 2, title: 'Apparel' },
        { id: 3, title: 'Appliances' },
        { id: 4, title: 'Arts & Crafts' },
        { id: 5, title: 'Audio & Music' },
        { id: 6, title: 'Automotive' },
        { id: 7, title: 'B2B' },
        { id: 8, title: 'Bags' },
        { id: 9, title: 'Books' },
        { id: 10, title: 'Childcare' },
        { id: 10, title: 'Computer' },
        { id: 10, title: 'Cosmetics' },
        { id: 10, title: 'Education' },
        { id: 10, title: 'Electronics' },
        { id: 10, title: 'Employment' },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: windowWidth,
            height: 50,
            backgroundColor: '#483D8B',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width:'95%', left:20, flexDirection:'row', alignItems:'center'}}>
           <Image source={require('../../../assets/images/backbuttonicon.png')} style={{width:12, height:12, marginTop:2}} />
            <Text style={{ color: 'white', marginLeft:10 }}>All Categories</Text>
          </View>
          <TouchableOpacity style={{ width:'5%', right:30 }}>
            <Image source={require('../../../assets/images/search.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.tasks}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[styles.card, { borderColor: item.color }]}
                onPress={() => {
                  this.clickEventListener(item);
                }}>
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  tasks: {},
  cardContent: {
    marginLeft: 20,
    
  },
  image: {
    width: 25,
    height: 25,
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    // elevation: 12,

    marginVertical: 1,
    //marginHorizontal: 20,
    height:50,
    backgroundColor: 'white',
    justifyContent:'center'
  },
  title:{
       fontSize:18,
  },
});
