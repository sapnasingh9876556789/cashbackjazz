import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const styles = ScaledSheet.create({
  container: {
    width: Width,
    flex:1
  },
  containerContent: {
    top: -42,
  },
  listContainer: {
    alignSelf: "center",
  },
  image: {
    width: Width / 2.4,
    resizeMode: "contain",
    height: 160,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginRight: 10,
  },
  readingRow: {
    marginTop: 60,
    justifyContent: "space-between",
    width: Width / 1.1,
    height: 50,
    alignSelf: "center",
    flexDirection: "row",
  },
  readingRowText: {
    color: "#40C0AD",
    fontSize: 15,
    fontWeight: "bold",
  },
  addReadingButton: {
    backgroundColor: "#40c0ad",
    padding: 5,
    width: 155,
    borderRadius: 7,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  addReadingButtonImage: {
    height: "60%",
    width: "24%",
  },
  addReadingButtonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 12,
    right: 8,
  },
  gridView1: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  viewAllButton: {
    marginTop: 12,
    width: Width / 1.1,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#40C0AD",
    alignItems: "center",
    borderRadius: 2,
  },
  viewAllButtonText: {
    color: "#fff",
  },
  reminderRow: {
    marginTop: 30,
    justifyContent: "space-between",
    width: Width / 1.1,
    height: 50,
    alignSelf: "center",
    flexDirection: "row",
  },
  reminderRowText: {
    color: "#40C0AD",
    fontSize: 15,
    fontWeight: "bold",
  },
  viewAllRemindersButton: {
    backgroundColor: "#40c0ad",
    padding: 5,
    width: 155,
    borderRadius: 7,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllRemindersButtonImage: {
    height: "60%",
    width: "24%",
  },
  viewAllRemindersButtonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 12,
    right: 8,
  },
  reminderBox: {
    marginTop: 10,
    width: Width / 1.1,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
  },
  reminderBoxRow: {
    flexDirection: "row",
    marginLeft: 10,
  },
  reminderBoxRowImage: {
    height: 25,
    width: 25,
  },
  reminderBoxRowText: {
    color: "#40C0AD",
    left: 10,
  },
  nofeelingWellRow: {
    marginTop: 30,
    justifyContent: "space-between",
    width: Width / 1.1,
    height: 50,
    alignSelf: "center",
    flexDirection: "row",
  },
  nofeelingWellRowText: {
    color: "#40C0AD",
    fontSize: 15,
    fontWeight: "bold",
  },
  healthDigestRow: {
    marginTop: 30,
    justifyContent: "space-between",
    width: Width / 1.1,
    height: 50,
    alignSelf: "center",
    flexDirection: "row",
  },
  healthDigestRowText: {
    color: "#40C0AD",
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default styles;