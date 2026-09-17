import { StyleSheet } from "react-native";
import { colors } from "../theme/colors"; // Utilizando o arquivo de tema que criamos

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
  label: {
    color: colors.textLabel || "#cbd5e1",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: colors.background || "#090d16",
    color: colors.textPrimary || "#ffffff",
    padding: 14,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.borderInput || "#334155",
  },
  botaoSimulado: {
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
  linkLogin: {
    marginTop: 20,
    alignItems: "center",
  },
  textoLink: {
    color: colors.textSecondary || "#64748b",
    fontSize: 14,
    textDecorationLine: "underline",

  },
});