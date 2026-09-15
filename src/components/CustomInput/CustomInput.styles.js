import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
  },
  label: {
    color: colors.textLabel || "#cbd5e1",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
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
});