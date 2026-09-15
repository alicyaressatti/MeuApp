import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || "#090d16",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  boasVindas: {
    fontSize: 14,
    color: colors.textSecondary || "#64748b",
  },
  tituloPage: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary || "#00d2ff",
  },
  listContent: {
    paddingBottom: 30,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  emptyText: {
    color: colors.textSecondary || "#64748b",
    fontSize: 14,
  },
});