import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.background || "#090d16",
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "center",
  },
  headerBox: {
    alignItems: "center",
    marginBottom: 30,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary || "#00d2ff",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 14,
    color: colors.textSecondary || "#64748b",
  },
  formCard: {
    backgroundColor: colors.card || "#131c2e",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border || "#1e293b",
  },
  linkCadastro: {
    marginTop: 20,
    alignItems: "center",
  },
  textoLink: {
    color: colors.textSecondary || "#64748b",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});