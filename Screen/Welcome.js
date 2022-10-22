import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Button from "../Components/Button";
import DropDown from "../Components/DropDown";
import Input from "../Components/Input";

function Welcome({ navigation }) {
  const [inputValues, setInputValues] = useState("");
  const [color, setColor] = useState(false);
  const [femColor, setFemColor] = useState(false);
  function inputChangeHandler(changedText) {
    setInputValues(changedText);
  }
  function pressHandler() {
    navigation.navigate("Birth");
  }
  function genderHandler() {
    if (!color) {
      setColor(true);
      setFemColor(false);
    } else {
      setColor(false);
      setFemColor(false);
    }
  }
  function femGenderHandler() {
    if (!femColor) {
      setColor(false);
      setFemColor(true);
    } else {
      setColor(false);
      setFemColor(false);
    }
  }
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={Styles.heading}>Welcome!</Text>
      <Text style={Styles.textStyle}>Creating profile for</Text>
      <DropDown />

      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={inputChangeHandler}
          value={inputValues}
          textInputConfig={{
            placeholder: "Enter Your Name",
            // value: { inputValues },
          }}
        />
      </View>
      <Text style={Styles.textStyle}>Gender</Text>
      <View style={Styles.rowButton}>
        <Pressable
          onPress={genderHandler}
          style={[Styles.button, color && { backgroundColor: "grey" }]}
        >
          <Text style={Styles.buttonText}>Male</Text>
        </Pressable>
        <Pressable
          onPress={femGenderHandler}
          style={[Styles.button, femColor && { backgroundColor: "grey" }]}
        >
          <Text style={Styles.buttonText}>Female</Text>
        </Pressable>
      </View>
      <Button onPress={pressHandler}>Next</Button>
    </View>
  );
}
export default Welcome;

const Styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 130,
    marginTop: 20,
  },
  rowInput: {
    flex: 1,
  },
  rowButton: {
    flexDirection: "row",
  },
  inputsRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    borderRadius: 8,
    margin: 10,
    padding: 8,
    backgroundColor: "#f4e221da",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textStyle: {
    marginLeft: 6,
    fontSize: 16,
  },
});
