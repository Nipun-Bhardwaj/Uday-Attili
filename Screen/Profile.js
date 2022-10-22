import { Text, View, StyleSheet } from "react-native";
import Input from "../Components/Input";
import Person from "../Components/Person";
import { Fontisto } from "@expo/vector-icons";

function Profile() {
  return (
    <View style={{ marginTop: 50 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={Styles.heading}>Profile</Text>
        <View style={Styles.inputsRow}>
          <Input
            style={Styles.rowInput}
            textInputConfig={{
              placeholder: "Search with Name",
              // value: { inputValues },
            }}
          />
        </View>
        <Fontisto
          style={{ marginTop: 15 }}
          name="filter"
          size={24}
          color="black"
        />
      </View>
      <Person />
      <Person />
    </View>
  );
}

export default Profile;

const Styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 15,
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
    flex: 1,
  },
});
