import { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Keyboard } from "react-native";
import Button from "../Components/Button";
import Input from "../Components/Input";

function OTP({ navigation, route }) {
  const phoneNumber = route.params.phoneNumber;
  const textInputRef = useRef(null);
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);
  function inputChangeHandler(enteredValue) {
    setCode(enteredValue);
  }
  const codeDigitsArray = new Array(4).fill(0);
  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);
  function pressHandler() {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  }
  function handleOnBlur() {
    setInputContainerIsFocused(false);
  }
  useEffect(() => {
    setPinReady(code.length === 4);
    return () => setPinReady(false);
  }, [code]);
  function onPressHandler() {
    navigation.navigate("Welcome");
  }
  function toDigitsInput(_value, index) {
    const emptyInput = " ";
    const digit = code[index] || emptyInput;

    const isCurrentDigit = index === code.length;
    const isLastDigit = index === 3;
    const isCodeFull = code.length === 4;

    const isDigitFocussed = isCurrentDigit || (isLastDigit && isCodeFull);

    return (
      <View
        style={[
          styles.OTPInput,
          inputContainerIsFocused && isDigitFocussed && styles.OTPInputFocussed,
        ]}
        key={index}
      >
        <Text style={styles.OTPInputText}>{digit}</Text>
      </View>
    );
  }
  return (
    <Pressable onPress={Keyboard.dismiss} style={{ marginTop: 200 }}>
      <Text style={styles.heading}>Verify Details</Text>
      <Text style={styles.highlight}>OTP sent to {phoneNumber}</Text>
      <View style={styles.OTPInputSection}>
        <Pressable onPress={pressHandler} style={styles.OTPInputContainer}>
          {codeDigitsArray.map(toDigitsInput)}
        </Pressable>
        <Input
          style={styles.rowInput}
          onChange={inputChangeHandler}
          value={code}
          onBlur={handleOnBlur}
          Inref={textInputRef}
          textInputConfig={{
            maxLength: 4,
            keyboardType: "decimal-pad",
            returnKeyType: "done",
          }}
        />
      </View>
      <Button onPress={onPressHandler} disabled={!pinReady}>
        VERIFY AND PROCEED
      </Button>
    </Pressable>
  );
}

export default OTP;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
  },
  highlight: {
    fontSize: 13,
    marginHorizontal: 10,
    paddingVertical: 10,
    color: "#000000",
  },
  OTPInputContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  OTPInputSection: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  OTPInput: {
    borderColor: "#000000",
    minWidth: "15%",
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
  },
  OTPInputText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
  OTPInputFocussed: {
    borderColor: "#ae1414",
    backgroundColor: "#f4e221da",
    minWidth: "15%",
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
  },
  rowInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
});
