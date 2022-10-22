import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Person() {
  const navigation = useNavigation();
  function pressHandler() {
    navigation.navigate("Profiling");
  }

  return (
    <Pressable onPress={pressHandler} style={{ flexDirection: "row" }}>
      <Image
        style={Styles.imageStyle}
        source={require("../assets/images.jpg")}
      />
      <View
        style={{
          flexDirection: "column",
          marginLeft: 5,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Name</Text>
        <Text style={{ fontWeight: "bold" }}>Surname</Text>
        <Text>20.08.95 | 5' 9"</Text>
        <Text>Software Engineer</Text>
        <Text>Adobe,Hyderabad</Text>
      </View>
    </Pressable>
  );
}

export default Person;

const Styles = StyleSheet.create({
  imageStyle: {
    height: 130,
    width: 120,
    borderRadius: 10,
    marginLeft: 20,
  },
});
