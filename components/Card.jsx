import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";



//Custom Components
import Spacer from "../components/Spacer";


const Card = ({ style, src,cardName, ...props }) => {
  return (
    <View>
      <Link href= '/ComingSoon' >
        <View style={[styles.card, style]} {...props}>
          <Image source={src} style={[styles.iconImg, {marginBottom:10}]} {...props} />
          <Text {...props}>{cardName}</Text>
          <Text>_________________</Text>
          <Spacer height={10} />
          <Text style={styles.text} {...props}>Check your banking activites</Text>
        </View>
      </Link>
    </View>
  );
};

//

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    width: 180,
    height: 180,
    padding: 20,
    borderRadius: 10,
  },
  iconImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  text: {
    textAlign: 'center'
  }
});
