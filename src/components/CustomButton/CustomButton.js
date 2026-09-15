import { TouchableOpacity, Text } from "react-native";
import { styles } from "./CustomButton.styles";

// Recebe o texto do botão (title) e a função de clique (onPress) via props
export function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity 
      style={styles.botao} 
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.textoBotao}>{title}</Text>
    </TouchableOpacity>
  );
}