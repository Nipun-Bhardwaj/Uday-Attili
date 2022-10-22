import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Button from "../Components/Button";
import Input from "../Components/Input";

function Birth({ navigation }) {
  const [inputValues, setInputValues] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [birth, setBirth] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [color, setColor] = useState(false);
  const [xolor, setXolor] = useState(false);
  const [femColor, setFemColor] = useState(false);

  function inputChangeHandler(value) {
    setInputValues(value);
  }

  function timeChangeHandler(value) {
    setTime(value);
  }

  function placeChangeHandler(value) {
    setPlace(value);
  }

  function birthChangeHandler(value) {
    setBirth(value);
  }

  function zodiacChangeHandler(value) {
    setZodiac(value);
  }

  function pressHandler() {
    navigation.navigate("Family");
  }
  function GenderHandler() {
    if (!color) {
      setColor(true);
      setFemColor(false);
      setXolor(false);
    } else {
      setColor(false);
      setFemColor(false);
      setXolor(false);
    }
  }
  function xenderHandler() {
    if (!xolor) {
      setColor(false);
      setXolor(true);
      setFemColor(false);
    } else {
      setColor(false);
      setFemColor(false);
      setXolor(false);
    }
  }
  function femGenderHandler() {
    if (!femColor) {
      setColor(false);
      setFemColor(true);
      setXolor(false);
    } else {
      setColor(false);
      setFemColor(false);
      setXolor(false);
    }
  }

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={Styles.heading}>Birth details</Text>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={inputChangeHandler}
          value={inputValues}
          textInputConfig={{
            placeholder: "Date Of Birth",
            // value: { inputValues },
          }}
        />
      </View>
      <Text>Time of Birth</Text>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={timeChangeHandler}
          value={time}
        />
      </View>
      <Text>Place of Birth</Text>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={placeChangeHandler}
          value={place}
        />
      </View>
      <Text>Birth star</Text>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={birthChangeHandler}
          value={birth}
        />
      </View>
      <Text>Zodiac Sign</Text>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={zodiacChangeHandler}
          value={zodiac}
        />
      </View>
      <View style={Styles.rowButton}>
        <Pressable
          onPress={GenderHandler}
          style={[Styles.button, color && { backgroundColor: "grey" }]}
        >
          <Text style={Styles.buttonText}>No</Text>
        </Pressable>
        <Pressable
          onPress={xenderHandler}
          style={[Styles.button, xolor && { backgroundColor: "grey" }]}
        >
          <Text style={Styles.buttonText}>Yes</Text>
        </Pressable>
        <Pressable
          onPress={femGenderHandler}
          style={[Styles.button, femColor && { backgroundColor: "grey" }]}
        >
          <Text style={Styles.buttonText}>Don't Know</Text>
        </Pressable>
      </View>
      <Button onPress={pressHandler}>Next</Button>
    </View>
  );
}

export default Birth;

const Styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 20,
  },
  rowInput: {
    flex: 1,
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
  rowButton: {
    flexDirection: "row",
  },
});
