import { StyleSheet, Text, View } from "react-native";
import Spacer from "../components/Spacer";

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This page is still under development...</Text>
      <Spacer height={30}></Spacer>
      <Text style={styles.textE}>🤷‍♂️🤷‍♂️</Text>
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textE: {
    fontSize: 50,
    fontWeight: "bold",
  }
});

export  {styles};
