import { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

let person = [
  { id: 1, name: "Myself" },
  { id: 2, name: "Sibling" },
  { id: 3, name: "Offspring" },
  { id: 4, name: "Someone Else" },
];

function DropDown() {
  const [data, setData] = useState(person);
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState(null);
  function pressHandler() {
    setShowOptions(!showOptions);
    if (value === null) setValue(person[0]);
  }
  function onPressHandler(item) {
    setShowOptions(false);
    setValue(item);
  }
  return (
    <View
      style={{
        marginBottom: 20,
        marginTop: 6,
      }}
    >
      <Pressable style={Styles.dropDownStyle} onPress={pressHandler}>
        <Text style={{ fontSize: 20 }}>{!!value ? value.name : "Myself"}</Text>
        <AntDesign
          name="caretdown"
          style={showOptions && { transform: [{ rotateX: "180deg" }] }}
        />
      </Pressable>
      {showOptions && (
        <View>
          {data.map((val, i) => {
            return (
              <Pressable
                onPress={onPressHandler.bind("this", val)}
                key={i}
                style={{
                  backgroundColor: value.id === val.id ? "#5557ec" : "white",
                  marginHorizontal: 5,
                  paddingVertical: 8,
                  borderRadius: 4,
                  paddingHorizontal: 6,
                }}
              >
                <Text
                  style={{ color: value.id === val.id ? "white" : "black" }}
                >
                  {val.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}

export default DropDown;

const Styles = StyleSheet.create({
  dropDownStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 8,
    minHeight: 40,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
