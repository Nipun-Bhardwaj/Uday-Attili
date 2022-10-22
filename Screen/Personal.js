import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Button from "../Components/Button";
import Input from "../Components/Input";

function Personal({ navigation }) {
  const [inputValues, setInputValues] = useState("");
  const [motherName, setmotherName] = useState("");
  const [place, setPlace] = useState("");
  const [momOccupation, setmomOccupation] = useState("");
  const [caste, setcaste] = useState("");
  const [sibling, setSibling] = useState(false);
  const [color, setColor] = useState(false);
  const [xolor, setXolor] = useState(false);
  const [femColor, setFemColor] = useState(false);

  function inputChangeHandler(value) {
    setInputValues(value);
  }

  function motherNameChangeHandler(value) {
    setmotherName(value);
  }

  function placeChangeHandler(value) {
    setPlace(value);
  }

  function momOccupationChangeHandler(value) {
    setmomOccupation(value);
  }

  function casteChangeHandler(value) {
    setcaste(value);
  }

  function pressHandler() {
    navigation.navigate("Almost");
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
      <Text style={Styles.heading}>Personal details</Text>
      <Text style={{ fontSize: 16, marginLeft: 10 }}>Height</Text>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={inputChangeHandler}
          value={inputValues}
          textInputConfig={{
            placeholder: "Father's Name",
            // value: { inputValues },
          }}
        />
      </View>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={motherNameChangeHandler}
          value={motherName}
          textInputConfig={{
            placeholder: "Heighest Qualification",
            // value: { inputValues },
          }}
        />
      </View>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={placeChangeHandler}
          value={place}
          textInputConfig={{
            placeholder: "Working at (company)",
            // value: { inputValues },
          }}
        />
      </View>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={momOccupationChangeHandler}
          value={momOccupation}
          textInputConfig={{
            placeholder: "Occupation (eg: Software Engineer )",
            // value: { inputValues },
          }}
        />
      </View>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={casteChangeHandler}
          value={caste}
          textInputConfig={{
            placeholder: "Annual Income",
            // value: { inputValues },
          }}
        />
      </View>
      <View style={Styles.inputsRow}>
        <Input
          style={Styles.rowInput}
          onChange={casteChangeHandler}
          value={caste}
          textInputConfig={{
            placeholder: "Working Location",
            // value: { inputValues },
          }}
        />
      </View>
      <View style={Styles.rowButton}>
        <Pressable
          onPress={xenderHandler}
          style={[Styles.button, xolor && { backgroundColor: "grey" }]}
        >
          <Text style={Styles.buttonText}>Never Married</Text>
        </Pressable>
        <Pressable
          onPress={GenderHandler}
          style={[Styles.button, color && { backgroundColor: "grey" }]}
        >
          <Text style={Styles.buttonText}>Divorced</Text>
        </Pressable>
        <Pressable
          onPress={femGenderHandler}
          style={[Styles.button, femColor && { backgroundColor: "grey" }]}
        >
          <Text style={Styles.buttonText}>Widdowed</Text>
        </Pressable>
      </View>
      <Button onPress={pressHandler}>Next</Button>
    </View>
  );
}

export default Personal;

const Styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 60,
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
  sibling: {
    marginLeft: 10,
  },
  button: {
    borderRadius: 8,
    margin: 8,
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
