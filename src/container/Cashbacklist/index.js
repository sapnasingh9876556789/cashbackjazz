import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import styles from "./style";

export default class Cashbacklist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      data: [
        { id: 1, color: '#0F4581', image: require("../../../assets/images/cashimage.png"), Title: "Redeeable", Descripton: "Amount", Cashback: "Cashback", Prize: "300$", },
        { id: 2, color: '#61DD6E', image: require("../../../assets/images/cashimage.png"), Title: "Redeeable", Descripton: "Amount", Cashback: "Cashback", Prize: "300$", },
        { id: 3, color: '#0F4581', image: require("../../../assets/images/cashimage.png"), Title: "Redeeable", Descripton: "Amount", Cashback: "Cashback", Prize: "300$", },
        { id: 4, color: '#61DD6E', image: require("../../../assets/images/cashimage.png"), Title: "Redeeable", Descripton: "Amount", Cashback: "Cashback", Prize: "300$", },
        { id: 5, color: '#0F4581', image: require("../../../assets/images/cashimage.png"), Title: "Redeeable", Descripton: "Amount", Cashback: "Cashback", Prize: "300$", },
      ]
    };
  }

  clickEventListener = (item) => {
    this.setState({ userSelected: item }, () => {
      this.setModalVisible(true);
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
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
        <FlatList
          style={styles.userList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => { this.clickEventListener(item) }}>
                <View style={{ width: 89, borderRadius: 10, height: 89, borderWidth: 2, borderColor: '#35C1F0', alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={styles.image} source={item.image} />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.name}>{item.Title}</Text>
                  <Text style={styles.position}>{item.Descripton}</Text>
                  <TouchableOpacity style={styles.followButton} onPress={() => this.clickEventListener(item)}>
                    <Text style={styles.followButtonText}>{item.Cashback}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={[styles.prize, { color: item.color }]}>{item.Prize}</Text>
                </View>
              </TouchableOpacity>
            )
          }} />

      </View>
    );
  }
}
