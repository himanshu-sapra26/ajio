import React ,{ Component } from "react";
import {View,Text, Touchable,Image, Button,StyleSheet ,TouchableOpacity,TextInput} from "react-native";
import Pictures from "../../../Pictures";
import navigationStrings from "../../Navigation/navigationStrings";



class Login extends Component{
    constructor(props){
        super(props);
    }

  render(){

    return(
      
    
    
<View style={styles.container}>

  <Image source={Pictures.ajio} style={styles.logo}></Image>  
  <Text style={styles.welcome}>Welcome to Ajio</Text>
<View> 
      
<TextInput style={styles.input}
      placeholder="Username"
      returnKeyType="next"
      onSubmitEditing={()=>this.passwordInput.focus()}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      >
</TextInput>
<TextInput style={styles.input1}
      placeholder="Password"
      returnKeyType="go"
      secureTextEntry 
      ref={(input)=>this.passwordInput=input}
      onSubmitEditing={()=>this.passwordInput.focus()}>
</TextInput>

<TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate(navigationStrings.HOMEPAGE)}>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

  
  <TouchableOpacity style={styles.buttonContainer1} onPress={()=>this.props.navigation.navigate(navigationStrings.SIGNUP)}>
  <Text style={styles.buttonText1}>SignUp</Text> 
</TouchableOpacity>


<View style={styles.signinwith}>
<TouchableOpacity><Image source={Pictures.fb} style={styles.fb}/>
</TouchableOpacity>
<TouchableOpacity><Image source={Pictures.google} style={styles.gmail}/>

</TouchableOpacity>
</View>
</View>
</View>



    );
  }
}

    

export default Login;
    








const styles = StyleSheet.create({
  container:
  {
   padding:20,
   flex:1,
   justifyContent:"center",
   alignItems:"stretch",
   marginTop:170,
  },
  logo:{
    height:100,
    width:100,
    marginTop:-190,
    marginLeft:110
  },
  welcome:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
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
    color:'#34495e',
    marginTop:20,
  },
  input1:{
    paddingLeft:20,
    borderRadius:50,
    height:50,
    fontSize:25,
    backgroundColor:'white',
    borderColor:"#1abc9c",
    borderWidth:1,
    marginBottom:20,
    color:'#34495e',
    marginTop:5,
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
  buttonContainer1:{
    height:50,
    borderRadius:50,
    backgroundColor:"#1abc9c",
    paddingVertical:10,
    justifyContent:'center',
    marginTop:10
  },
  buttonText1:{
    textAlign:'center',
    color:'#ecf0f1',
    fontSize:20,
  },
  
  signinwith:{
    marginTop:50,
  },
  fb:{
    height:50,
    width:319,
  },
  gmail:{
    height:50,
    width:319,
    marginTop:10,
  }
  
  
 
})