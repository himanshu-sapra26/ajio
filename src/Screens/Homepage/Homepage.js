import React, { Component } from "react";
import {
  View,
  Text,
  Touchable,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  Alert,
  
} from "react-native";
import Pictures from "../../../Pictures";
import navigationStrings from "../../Navigation/navigationStrings";
import MyCarousel from "../../Components/Carousel";
import Clothes from "../../Components/Clothes";
import Cart from '../Cart/Cart';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: 1,
      counter: 0,
      blankCartArray:[],
      
      
      clothes: [
        {
          id: 1,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/20210112/0N8b/5ffcd82e7cdb8c1f1426de53/tom_hiddle_black_short_sleeves_crew-_neck_t-shirt.jpg",
          Name: "Tom_Hiddle",
          Description:"Round Neck T-shirt",
          Price: "$1200",
          newPrice:850,
          Off:'30% off',
          Color:'Black',
          save:"$350",
          quantity:1,
        },
        {
          id: 2,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/20210205/lrsW/601c4971f997dd5c40e803b2/performax_yellow_crew-neck_t-shirt_with_raglan_sleeves.jpg",
          Name: "Nike",
          Description:"Crew Neck T-shirt",
          Price: "$1359",
          newPrice:1000,
          Off:'20% off',
          Color:'Yellow',
          save:"$359",
          quantity:1,
        },
        {
          id: 3,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/h46/hce/15216780148766/ausk_blue_crew-neck_t-shirt_with_contrast_stripes.jpg",
          Name: "Puma",
          Description:"Crew Neck T-shirt",
          Price: "$1000",
          newPrice:700,
          Off:'30% off',
          Color:'Ausk_Blue',
          save:'$300',
          quantity:1,
        },
        {
          id: 4,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/20201113/iO73/5fad9a7daeb269d5630d1ce5/sangakurti_black_floral_print_flared_kurta.jpg",
          Name: "Floral Print Kurta",
          Description:"Sangakurti",
          Price: "$1300",
          newPrice:1000,
          Off:'30% off',
          Color:'Black',
          save:'$300',
          quantity:1,
        },
        {
          id: 5,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/20201223/JmVs/5fe2a889aeb269d5634f9374/trends_tower_maroon_pack_of_2_short_sleeves_t-shirt.jpg",
          Name: "Trends_tower",
          Description:"Pack of 2 T-Shirt",
          Price: "$900",
          newPrice:500,
          Off:'35% off',
          Color:'Maroon and Green',
          save:'$400',
          quantity:1,
        },
        {
          id: 6,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/h58/he5/15595703861278/-473Wx593H-461111176-grey-MODEL2.jpg",
          Name: "Huetrap",
          
          Description:"Round Neck T-shirt",
          Price: "$900",
          newPrice:550,
          Off:'30% off',
          Color:'Grey',
          save:'$350',
          quantity:1,
        },
        {
          id: 7,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/20201029/6CPS/5f9a3076f997dd8c837eccba/indo_era_cream_embroidered_straight_kurta_set_with_dupatta.jpg",
          Name: "Indo_era",
          Description:"Straight Kurta",
          Price: "$1200",
          newPrice:900,
          Off:'35% off',
          Color:'Cream',
          save:'$300',
        },
        {
          id: 8,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/20200806/mmpa/5f2b8343f997dd227794b697/indo_era_magenta_geometric_print_straight_kurta_set.jpg",
          Name: "Indo_era",
          Description:"Geometric Print",
          Price: "$1900",
          newPrice:1500,
          Off:'45% off',
          Color:'Magenta',
          save:'$400',
          quantity:1,

        },
        {
          id: 9,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/20200913/ku9S/5f5dcb6af997dd6918bcd2d0/indo_era_beige_geometric_print_straight_kurta_set.jpg",
          Name: "Indo_era",
          Description:"Geometric Print",
          Price: "$1400",
          newPrice:1200,
          Off:'30% off',
          Color:'Beige',
          save:'$200',
          quantity:1,

        },
        {
          id: 10,
          pic:
            "https://assets.ajio.com/medias/sys_master/root/20200806/Ho1U/5f2b81727cdb8ca2cf8f606a/indo_era_green_floral_calf_length_kurta_set.jpg",
          Name: "Floral",
          Description:"Straight Kurta",
          Price: "$1800",
          newPrice:1500,
          Off:'35% off',
          Color:'Green',
          save:'$300',
          quantity:1,

        },
      ],
      selectedItem:'',
    };
  }
  
  _onClickCart = (id) => {
    console.log(id);
     
     const { clothes, blankCartArray, counter} = this.state;
     blankCartArray.push(clothes[id-1])
    this.setState({blankCartArray: blankCartArray, counter: counter+1})


};
checkCart=()=>{
  const {blankCartArray}=this.state;
   this.props.navigation.navigate('cart',{data:blankCartArray});
 
}
  componentDidMount(){
    this.focusListener = this.props.navigation.addListener('focus',()=>{
        if(this.props.route.params){
            let itemsadd=this.props.route.params.itemsinfo
            this._onClickCart(itemsadd)
            this.props.route.params=null
        }
    })
  }
  componentWillUnmount(){
    if(this.focusListener){
        this.focusListener();
    }
  }
  render() {
    const { navigation, counter, clothes } = this.state;
    
    return (
      <View style={{ flex: 1 , backgroundColor:'#f0f5f9'}}>
        <ScrollView>
          <View>
            <View style={styles.container}>
              <Image
                style={{ height: 30, width: 30 }}
                source={Pictures.menubar}
              />
              <Image
                style={{ height: 30, width: 100, marginLeft: 75 }}
                source={Pictures.ajio2}
              />
              <Image
                style={{ height: 50, width: 50, marginLeft: "auto",marginTop:-10 }}
                source={Pictures.bell2}
              />
            </View>
            <View style={styles.input}>
              <Image
                style={{ height: 30, width: 28, marginLeft: 5, marginTop: -1 }}
                source={Pictures.search}
              />

              <TextInput
                style={{marginTop: -30, marginLeft: 36 }}
                placeholder="Search by Product,Brand & more"
              />
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ flexDirection: "row", marginTop: 10, backgroundColor:'#f0f5f9' }}
              
            >
              <View
                style={{
                  backgroundColor: "orange",
                  padding: 10,
                  margin: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 60, width: 50 }}
                  source={{
                    uri:
                      "https://assets.ajio.com/medias/sys_master/root/20210113/BXMR/5ffe4c39aeb26969814d7ed2/jorkk_maroon_typographic_print_crew-neck_t-shirt.jpg",
                  }}
                ></Image>
                <Text style={{ color: "white", textAlign: "center" }}>MEN</Text>
              </View>
              <View
                style={{
                  backgroundColor: "purple",
                  padding: 10,
                  margin: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 60, width: 50, marginLeft: 10 }}
                  source={{
                    uri:
                      "https://assets.ajio.com/medias/sys_master/root/20210203/2PUl/601abd9a7cdb8c1f1434e571/performax_navy_blue_quick_dry_running_jacket_with_mask.jpg",
                  }}
                ></Image>
                <Text style={{ color: "white", alignItems: "center" }}>
                  WOMEN
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "maroon",
                  padding: 10,
                  margin: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 60, width: 50 }}
                  source={{
                    uri:
                      "https://assets.ajio.com/medias/sys_master/root/h35/h67/16094805852190/aarika_girls_ethnic_blue_dungaree_dress_with_striped_top.jpg",
                  }}
                ></Image>
                <Text style={{ color: "white", textAlign: "center" }}>
                  KIDS
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "blue",
                  padding: 10,
                  margin: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 60, width: 50 }}
                  source={{
                    uri:
                      "https://assets.ajio.com/medias/sys_master/root/20200917/vHRF/5f626e73aeb269d563c19467/aviliving_multicoloured_floral_set_of_7_table_mats.jpg",
                  }}
                ></Image>
                <Text style={{ color: "white", textAlign: "center" }}>
                  HOME
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "red",
                  padding: 10,
                  margin: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 60, width: 50 }}
                  source={{
                    uri:
                      "https://assets.ajio.com/medias/sys_master/root/20200728/iLGW/5f2047bbf997ddfa532446f7/arrow_black_textured_slip-on_loafers.jpg",
                  }}
                ></Image>
                <Text style={{ color: "white", textAlign: "center" }}>
                  SHOES
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "green",
                  padding: 10,
                  margin: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 60, width: 50, marginLeft: 20 }}
                  source={{
                    uri:
                      "https://assets.ajio.com/medias/sys_master/root/20200812/eiXn/5f34049f7cdb8ca2cf961692/superdry_blue_syg193u_digital_wrist_watch.jpg",
                  }}
                ></Image>
                <Text style={{ color: "white", textAlign: "center" }}>
                  WATCHES
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "orange",
                  padding: 10,
                  margin: 10,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 60, width: 50 }}
                  source={{
                    uri:
                      "https://assets.ajio.com/medias/sys_master/root/20201002/GXOw/5f762908aeb269d563d076b5/starwalk__disney_sorcerer's_apprentice_mickey_plush_toy.jpg",
                  }}
                ></Image>
                <Text style={{ color: "white", textAlign: "center" }}>
                  TOYS
                </Text>
              </View>
            </ScrollView>

            <View>
              <MyCarousel />
            </View>
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIiN2vdc7zNUA8FuYTbdzZPGuDu2pm9MdyQ&usqp=CAU",
              }}
              style={{ height: 50, width: "100%", marginBottom: 5 }}
            />
            <Image
              source={Pictures.treats}
              style={{ height: 80, width: "100%" }}
            />
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWX6dcBhx2N53WJkSKMPKvYsc8dXSOyFyzg&usqp=CAU",
              }}
              style={{ height: 80, width: "100%", marginTop: 3 }}
            />
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40mbH-nuR2wHB8Ew-A5TmXrZbF379dFsuSQ&usqp=CAU",
              }}
              style={{ height: 60, width: "100%", marginTop: 10 }}
            />

            <FlatList
              data={clothes}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => (
                <View style={{ marginBottom: 10 }} />
              )}
              renderItem={({ item }) => (
                <Clothes data={item} 
                _onClickCart={this._onClickCart}/>
              )}
            />

          
            <Image
              source={{
                uri:
                  "https://assets.ajio.com/medias/sys_master/images/images/h6f/hd4/28296272773150/29102020-M-SHP-ajiocares-strip.jpg",
              }}
              style={{ height: 80, width: 370, marginTop: 5 }}
            />

           
          </View>
        </ScrollView>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 30, marginRight: 10 }}
              source={Pictures.home}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 30, marginLeft: 20 }}
              source={Pictures.stores}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate(navigationStrings.ACCOUNT)}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 40 }}
              source={Pictures.account}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 30, marginLeft: 50 }}
              source={Pictures.wishlist}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.checkCart}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 50 }}
              source={Pictures.logo}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={{marginBottom:14,marginLeft:-5,color:'black'}}>{counter}</Text>
        </View>
      </View>
    );
  }
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 20,
    backgroundColor:'#f0f5f9'
  },
  input: {
    borderWidth: 2,
    marginTop: 18,
    borderRadius: 60,
    height: 35,
    width: 350,
    marginLeft: 5,
    borderColor:'grey',
    backgroundColor:'#f0f5f9'
  },
  button: {
    backgroundColor: "#008cff",
    padding: 10,
    width: 150,
    textAlign: "center",
  },
  button1: {
    backgroundColor: "#008cff",
    padding: 10,
    width: 150,
    textAlign: "center",
    marginLeft: 200,
    marginTop: -50,
  },
});
