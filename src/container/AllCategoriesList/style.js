import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const styles = ScaledSheet.create({
  container: {
    flex:1
  },
  header1:{
    backgroundColor:'#0F4581',
    width:Width,
    height:70,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flexDirection:'row' ,
    alignItems:'center'
  },
  header2:{
      backgroundColor:'red',
      width:Width,

      
  },
  card:{
    width:"48%",
    height:175,
    backgroundColor:'#0F4581',
    borderRadius:15,
   justifyContent:'center',
    alignItems:'center',
    marginTop:30
  },
  card2: {
    width:"48%",
    height:85,
    backgroundColor:'#0F4581',
    borderRadius:15,
   justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:30
  },
  maincard:{
    flexDirection:'row',
    marginTop:20,
    width:Width/1,
    justifyContent:'space-between'
  },
  boxtext: {
    color:'white',
    fontSize:18,
    textAlign:'center',
    marginTop:5
  },
  boxtext2: {
    color:'white',
    fontSize:14,
    textAlign:'center',
    marginTop:5
  }
});
export default styles;