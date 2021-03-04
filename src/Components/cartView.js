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
} from "react-native";
import Pictures from "../../Pictures";


export default function cartView(props) {
  const { data, Test, item, _onNextScreen, _onClickCart } = props;
  return (
    <View style={{ justifyContent: "space-between", margin: 10 }}>
      <Image style={styles.card} source={data.image} />
     
    </View>
  );
}
const styles = StyleSheet.create({
   card: {
    height: 300,
    width: 160,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
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