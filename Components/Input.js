import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({
  label,
  textInputConfig,
  style,
  onChange,
  value,
  onBlur,
  Inref,
}) {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        ref={Inref}
        {...textInputConfig}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: "#c6affc",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#c6affc",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: "#2d0689",
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {},
  invalidInputs: {},
});
