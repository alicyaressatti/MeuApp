import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  botao: {
    backgroundColor: colors.primary || "#00d2ff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
  },
  textoBotao: {
    color: colors.background || "#090d16",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 1,
  },
});