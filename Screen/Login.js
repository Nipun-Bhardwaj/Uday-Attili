import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Components/Button";
import Input from "../Components/Input";

function Login({ navigation }) {
  const [inputValues, setInputValues] = useState("");
  const [pinReady, setPinReady] = useState(false);

  function inputChangeHandler(enteredValue) {
    setInputValues(enteredValue);
  }

  useEffect(() => {
    setPinReady(inputValues.length >= 1);
    return () => setPinReady(false);
  }, [inputValues]);

  function onPressHandler() {
    navigation.navigate("OTP", {
      phoneNumber: inputValues,
    });
  }
  return (
    <View style={{ flexDirection: "column", backgroundColor: "#8f8787" }}>
      <View style={{ flex: 1 }}></View>
      <View style={Styles.container}>
        <Text style={Styles.textStyle}>Login</Text>
        <Text style={Styles.highlight}>10 digit mobile number</Text>
        <View style={Styles.inputsRow}>
          <Input
            style={Styles.rowInput}
            onChange={inputChangeHandler}
            value={inputValues}
            textInputConfig={{
              placeholder: "Enter Your Number",
              keyboardType: "decimal-pad",
              // value: { inputValues },
            }}
          />
        </View>
        <Button onPress={onPressHandler} disabled={!pinReady}>
          {" "}
          CONTINUE{" "}
        </Button>
      </View>
    </View>
  );
}

export default Login;

const Styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  highlight: {
    fontSize: 13,
    marginHorizontal: 10,
    paddingVertical: 10,
    color: "#8c86867a",
  },
  inputsRow: {
    flexDirection: "row",
  },
  rowInput: {
    flex: 1,
  },
  container: {
    marginTop: 350,
    backgroundColor: "white",
  },
});
