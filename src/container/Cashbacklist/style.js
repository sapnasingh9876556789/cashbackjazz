import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  header: {
    backgroundColor: "#00CED1",
    height: 200
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
    flex: 1,
  },
  detailContent: {
    top: 80,
    height: 500,
    width: Dimensions.get('screen').width - 90,
    marginHorizontal: 30,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: "#ffffff"
  },
  userList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,

  },



  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#0F4581",
    fontWeight: 'bold'
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#0F4581"
  },
  about: {
    marginHorizontal: 10
  },

  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#00BFFF",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height: 250,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent: 'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose: {
    height: 20,
    backgroundColor: '#20b2aa',
    padding: 20
  },
  modalInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  prize: {
    fontSize: 35,
    color: 'black',
    marginLeft: 50,
    fontWeight: 'bold'
  },
  header1: {
    backgroundColor: '#0F4581',
    width: Width,
    height: 70,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
});
export default styles;