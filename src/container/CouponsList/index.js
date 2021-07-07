import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numColumns: 2,
            userSelected: {},
            modalVisible: false,
            data: [
                { id: 1, image: require('../../../assets/images/kotak.png') },
                { id: 2, image: require('../../../assets/images/kw.png') },
                { id: 3, image: require('../../../assets/images/kw.png') },
                { id: 4, image: require('../../../assets/images/la.png') },
                { id: 5, image: require('../../../assets/images/lr.png') },
                { id: 6, image: require('../../../assets/images/kotak.png') },
                { id: 7, image: require('../../../assets/images/kw.png') },
                { id: 8, image: require('../../../assets/images/la.png') },
                { id: 9, image: require('../../../assets/images/lr.png') },
                { id: 10, image: require('../../../assets/images/kotak.png') },
            ],
        };
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={[styles.item]}>
                <Image
                    style={{ height: 100, width: 100 }}
                    source={item.image}
                />
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>ghhjkk</Text>
                </View>
                <View style={{}}>
                    <FlatList
                        style={{ width: windowWidth / 1.1 }}
                        data={this.state.data}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={this.renderItem}
                        numColumns={2}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});
