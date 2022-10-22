import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

function Profiling() {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <Image
        style={Styles.imageStyle}
        source={require("../assets/images.jpg")}
      />
      <View>
        <Text style={Styles.heading}>Name Surname</Text>
        <Text>Hello my name is Nipun I made this demo application</Text>
        <Text>Hello my name is Nipun I made this demo application</Text>
        <Text>Hello my name is Nipun I made this demo application</Text>
        <Text>Hello my name is Nipun I made this demo application</Text>
        <Text style={Styles.heading}> Basic Details </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={Styles.textStyle}>Date of Birth</Text>
          <Text style={Styles.textStyle}> 13 August 1993</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={Styles.textStyle}>Time of Birth</Text>
          <Text style={Styles.textStyle}> 10:52 AM</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={Styles.textStyle}>Place of Birth</Text>
          <Text style={Styles.textStyle}> Vijaywada,India</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={Styles.textStyle}>Caste</Text>
          <Text style={[Styles.textStyle, {}]}>
            {"               "}
            Brahmin
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={Styles.textStyle}>Sub-Caste</Text>
          <Text style={Styles.textStyle}>{"      "} Niyogi</Text>
        </View>
        <View>
          <Text style={Styles.heading}> Personal Details </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={Styles.textStyle}>Birth Star</Text>
            <Text style={Styles.textStyle}>{"       "} Purvashada</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={Styles.textStyle}>Zodiac</Text>
            <Text style={Styles.textStyle}>{"             "}Sagittarius </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={Styles.textStyle}>Dosh</Text>
            <Text style={Styles.textStyle}>{"               "} No</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={Styles.textStyle}>Caste</Text>
            <Text style={[Styles.textStyle, {}]}>
              {"               "}
              Brahmin
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={Styles.textStyle}>Sub-Caste</Text>
            <Text style={Styles.textStyle}>{"      "} Niyogi</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Profiling;

const Styles = StyleSheet.create({
  imageStyle: {
    height: 350,
    width: 400,
    borderRadius: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 15,
  },
  textStyle: {
    fontSize: 16,
    marginRight: 40,
  },
});
