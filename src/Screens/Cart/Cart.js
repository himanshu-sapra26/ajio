import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import cartView from "../../Components/cartView";
import Clothes from "../../Components/Clothes";




export default function Cart(props) {
 const { data} = props.route.params;
console.log(data);
  
    //    console.log(props.route.params.data)
  

 
  return (
    <View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
        renderItem={({ item }) => (
          <cartView
            data={item}
          
          />
        )}
      />
     
    </View>
  );
}
const styles = StyleSheet.create({
 
  buttonStyle: {
    backgroundColor: "#f2288c",
    padding: 10,
    width: 100,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 40,
    marginTop: 10,
  },
});