import { View, Text, StyleSheet } from "react-native";

export function PlayersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogadores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});