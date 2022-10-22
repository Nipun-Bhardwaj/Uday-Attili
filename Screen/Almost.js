import { useState } from "react";
import { Text, View, StyleSheet, Switch, TextInput } from "react-native";
import Button from "../Components/Button";

function Almost({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [yourself, setYourself] = useState("");
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const yourselfHandler = (value) => setYourself(value);

  function pressHandler() {
    navigation.navigate("Home");
  }

  return (
    <View style={{ marginTop: 50, backgroundColor: "white" }}>
      <Text style={Styles.heading}>Almost There!</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={Styles.upload}>Upload Images</Text>
        <Button>Upload</Button>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={Styles.upload}>Hide Photos?</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{ marginTop: 40, marginBottom: 140 }}>
        <TextInput
          style={[Styles.input, Styles.inputMultiline]}
          value={yourself}
          onChangeText={yourselfHandler}
          placeholder="Describe Yourself and what you're looking  
          for!"
        />
      </View>
      <Button onPress={pressHandler}>Complete Profile</Button>
    </View>
  );
}

export default Almost;

const Styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 20,
  },
  upload: { marginLeft: 5, marginTop: 20, fontSize: 16, marginRight: 20 },
  input: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 6,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 18,
    margin: 10,
  },
  inputMultiline: {
    minHeight: 200,
    textAlignVertical: "top",
  },
});
