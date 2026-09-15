import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card || "#131c2e",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border || "#1e293b",
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary || "#00d2ff",
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  badgeConcluido: {
    backgroundColor: "#10b98120",
    borderWidth: 1,
    borderColor: "#10b981",
  },
  badgeProgresso: {
    backgroundColor: "#f59e0b20",
    borderWidth: 1,
    borderColor: "#f59e0b",
  },
  textoBadge: {
    fontSize: 11,
    fontWeight: "bold",
  },
  textoConcluido: {
    color: "#10b981",
  },
  textoProgresso: {
    color: "#f59e0b",
  },
  descricao: {
    fontSize: 13,
    color: colors.textSecondary || "#64748b",
    lineHeight: 18,
  },
});