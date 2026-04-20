import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏐 VTeam</Text>
      <Text style={styles.subtitle}>
        Organize seus jogos de vôlei com facilidade
      </Text>

      <Button
        title="Ver Jogadores"
        onPress={() => navigation.navigate("Players")}
      />
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
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
});