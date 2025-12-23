import { StyleSheet, View, Image, Text } from "react-native";
import add from "../assets/images/add-svgrepo-com.svg";
import bank from "../assets/images/bank-svgrepo-com.svg";
import idea from "../assets/images/bookshelf-svgrepo-com.svg";
import link from "../assets/images/links-add-symbol-in-a-circle-svgrepo-com.svg";
import wifi from "../assets/images/wifi-square-svgrepo-com.svg";
import logo from "../assets/images/mu.png";

// Custom Components

import Spacer from "../components/Spacer";
import Card from "../components/Card";


const index = () => {
  return (
    <>
      <View style={[{ alignItems: "center", marginTop: 30 }]}>
        <Image source={logo} style={styles.img} />
        <Spacer height={20}></Spacer>
        <Text style={styles.textE} >Bank Of Mekelle University</Text>
      </View>
      <View style={[styles.container, { marginTop: 50 }]}>
        <Card src={bank} cardName="Banking" />
        <Card src={idea} cardName="Ideas" />
        <Card src={add} cardName="Add" />
        <Card src={link} cardName="Links" />
        <Card src={wifi} style={[{ width: 180 * 2 }]} cardName="Add" />
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textE: {
    fontSize: 30,
    fontWeight: "bold",
  }
});
