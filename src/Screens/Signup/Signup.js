import React ,{ Component } from "react";
import {View,Text, TextInput,StyleSheet, TouchableOpacity,Image } from "react-native";
import Pictures from "../../../Pictures";
import navigationStrings from "../../Navigation/navigationStrings";

// import { TextInput } from "react-native-gesture-handler";


class Signup extends Component{


  render(){
    const {navigation}=this.props;
    return(
    //   <View style={{flex:1,justifyContent:"center"}}>
    //       <Text onPress={()=>navigation.goBack()} >Go BAck</Text>
    //   </View>



  <View style={styles.container}>
       <Image source={Pictures.ajio} style={{height:200,width:150,marginLeft:80,marginTop:50}} ></Image> 
      <View style={styles.registerForm}>
          <TextInput style={styles.input}
          placeholder="Enter your name"
          returnKeyType="next">
          </TextInput>
          <TextInput style={styles.input}
          placeholder="Enter Mobile No.">
         </TextInput>
          <TextInput style={styles.input}
          placeholder="Enter your email"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}>
          </TextInput>
          <TextInput style={styles.input}
          placeholder="Password"
          returnKeyType="go"
          secureTextEntry 
          ref={(input)=>this.passwordInput=input}
         >
          </TextInput>
          

          <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate(navigationStrings.HOMEPAGE)}>
          <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
      </View>
  </View>



    );
  }
}
export default Signup;




const styles = StyleSheet.create({
    container:
    {
        flex:1,
        padding:10,
        backgroundColor:"pink",

    },
    registerForm:{
        marginTop: 30,
        justifyContent:'center',
        alignItems:'stretch',
    },
    input:{
        paddingLeft:20,
        borderRadius:50,
        height:50,
        fontSize:25,
        backgroundColor:'white',
        borderColor:"#1abc9c",
        borderWidth:1,
        marginBottom:20,
        color:'#34495e'
      },
      buttonContainer:{
        height:50,
        borderRadius:50,
        backgroundColor:"#1abc9c",
        paddingVertical:10,
        justifyContent:'center'
      },
      buttonText:{
        textAlign:'center',
        color:'#ecf0f1',
        fontSize:20,
      },
})   



