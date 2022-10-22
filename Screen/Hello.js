import { Text, View, StyleSheet, ScrollView } from "react-native";
import Person from "../Components/Person";

function Hello() {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={Styles.heading}>Recently Added</Text>
        <Text style={Styles.more}>See More</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "column" }}>
          <Person />
          <Person />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Person />
          <Person />
        </View>
      </ScrollView>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={Styles.heading}>Matchin Profiles</Text>
          <Text style={Styles.more}>See More</Text>
        </View>
        <ScrollView>
          <Person />
          <Person />
          <Person />
          <Person />
        </ScrollView>
      </View>
    </View>
  );
}

export default Hello;

const Styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  more: {
    color: "#efe413",
    marginTop: 17,
    marginLeft: 120,
  },
});
