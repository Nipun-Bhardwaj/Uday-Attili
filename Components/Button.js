import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../Constants/styles";

function Button({ children, onPress, mode, style, disabled }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
        disabled={disabled}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    margin: 10,
    padding: 8,
    backgroundColor: "#f4e221da",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
    fontSize: 18,
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
