import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Button from "../Components/Button";
import Input from "../Components/Input";

function Family({ navigation }) {
  const [inputValues, setInputValues] = useState("");
  const [motherName, setmotherName] = useState("");
  const [place, setPlace] = useState("");
  const [momOccupation, setmomOccupation] = useState("");
  const [caste, setcaste] = useState("");
  const [sibling, setSibling] = useState(false);

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

  function onPressSibling() {
    setSibling(!sibling);
  }

  function pressHandler() {
    navigation.navigate("Personal");
  }

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={Styles.heading}>Family details</Text>
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
            placeholder: "Mother's Name",
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
            placeholder: "Father's Occupation",
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
            placeholder: "Mother's Occupation",
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
            placeholder: "Sub-Caste",
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
            placeholder: "Gothram",
            // value: { inputValues },
          }}
        />
      </View>
      <Text style={Styles.sibling}>Siblings</Text>
      {!sibling && (
        <Pressable style={Styles.sibling} onPress={onPressSibling}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            + Add Siblings
          </Text>
        </Pressable>
      )}
      {sibling && (
        <View style={Styles.inputsRow}>
          <Input
            style={Styles.rowInput}
            onChange={casteChangeHandler}
            value={caste}
            textInputConfig={{
              placeholder: "Sibling's Name",
              // value: { inputValues },
            }}
          />
        </View>
      )}
      <Button onPress={pressHandler}>Next</Button>
    </View>
  );
}

export default Family;

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
});
