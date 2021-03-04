import React,{Component} from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import Pictures from '../../../Pictures';
import Clothes from '../../Components/Clothes';
import navigationStrings from '../../Navigation/navigationStrings';

export default class DetailPage extends Component{
    render(){
      let item=this.props.route.params.item
      // const{onCart}=this.props.route.params;
      const{navigation}=this.props
    return(
    <View>
    <View style={{flex:1,flexDirection:'row'}}>
      {/* <TouchableOpacity onPress={()=>navigationStrings.goBack()}> */}
<Image source={Pictures.arrow} style={{height:30,width:30,marginTop:30}}/>
<Image source={Pictures.search} style={{height:30,width:30,marginTop:30,marginLeft:210}}/>
<Image source={Pictures.wishlist} style={{height:30,width:30,marginTop:30,marginLeft:15}}/>
   <Image source={Pictures.logo} style={{height:30,width:30,marginTop:28,marginLeft:10}}/>
</View>
<ScrollView>
  <Image source={{uri:item.pic}} style={{height:500,width:370,marginTop:90}}/>
  <Text style={{marginLeft:10,fontWeight:'bold',marginLeft:30}}>{item.Name}</Text>
  <Text style={{marginLeft:10,marginLeft:30,color:'grey'}}>{item.Description}</Text>
  <View style={{flexDirection:'row'}}><Text style={{marginLeft:10,marginLeft:30,fontWeight:"bold"}}>{item.Price}</Text><Text style={{marginLeft:20,color:"green",fontWeight:'bold'}}>50% off</Text>
  </View>
  <View style={{flexDirection:'row',marginLeft:240,backgroundColor: "#008cff",
            padding: 10,
            width:130,
            textAlign:'center',marginTop:-50,marginRight:30}}>
              <Text onPress={()=>{this.props.navigation.navigate(navigationStrings.HOMEPAGE,{itemsinfo:item.id});}}>Add to Cart</Text>
    </View>
  
  <Text style={{color:'grey',fontSize:10,marginLeft:30}}>Price inclusive of all taxes</Text>
  <Text style={{fontWeight:'bold',marginTop:20,marginLeft:30}}>Color</Text>
  <Text style={{marginLeft:30,color:'grey'}}>{item.Color}</Text>
  
  <View style={{flexDirection:'row'}}><Text style={{marginTop:30,fontWeight:'bold',marginLeft:30}}>Select Size</Text><Text style={{color:'#188faf',marginTop:30,marginLeft:90,fontWeight:'bold'}}>Size Chart</Text></View>
  <View style={{flexDirection:'row',marginTop:5}}>
  <Text style={{height:30,width:40,marginLeft:30,borderWidth:2,borderRadius:15,textAlign:'center',borderColor:'grey'}}>S</Text>   
  <Text style={{height:30,width:40,marginLeft:10,borderWidth:2,borderRadius:15,textAlign:'center',borderColor:'grey'}}>M</Text>   
  <Text style={{height:30,width:40,marginLeft:10,borderWidth:2,borderRadius:15,textAlign:'center',borderColor:'grey'}}>L</Text>   
  <Text style={{height:30,width:40,marginLeft:10,borderWidth:2,borderRadius:15,textAlign:'center',borderColor:'grey'}}>XL</Text> 
  <Text style={{height:30,width:40,marginLeft:10,borderWidth:2,borderRadius:15,textAlign:'center',borderColor:'grey'}}>XXL</Text>  
  </View>
  
  <View style={{flexDirection:'column'}}>
  <Text style={{marginTop:30,fontWeight:'bold',marginLeft:30}}>Product Details</Text> 
  <Text style={{marginLeft:30,marginTop:10}}>{'\u25CF'}Regular Fit</Text> 
  <Text style={{marginLeft:30,marginTop:10}}>{'\u25CF'}100% cotton</Text> 
  <Text style={{marginLeft:30,marginTop:10}}>{'\u25CF'}Machine Wash</Text> 
  <Text style={{marginLeft:30,marginTop:10}}>{'\u25CF'}Product Code:1233321</Text> 
  </View>
  <View>
  <Image source={Pictures.invite} style={{height:100,width:370,marginTop:10}}/>
  </View>
  

  </ScrollView>
  {/* <View style={{flexDirection:'row'}}>
   
   <TouchableOpacity><Image style={{width:40,height:40}} source={Pictures.whatsapp} resizeMode='cover'/></TouchableOpacity>
   <TouchableOpacity><Image style={{width:40,height:40}} source={Pictures.wishlist} resizeMode='cover'/></TouchableOpacity> 
   <TouchableOpacity><Image style={{width:120,height:60,marginTop:-5,marginLeft:190}} source={Pictures.bag} resizeMode='cover'/></TouchableOpacity> 
 </View> */}
    </View>
    )
    }
}