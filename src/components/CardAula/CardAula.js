import {View, Text} from "react-native";
import {styles} from "./CardAula.styles";

export function CardAula({ item }){
    const isConcluido = item.status === "Concluído";

    return(
        <View style={styles.card}>
            <View style={styles.headerCard}>
                <Text style={styles.titulo}>{item.titulo}</Text>
        
                <View style={[styles.badge, isConcluido ? styles.badgeConcluido : styles.badgeProgresso]}>
                    <Text style={[styles.textoBadge, isConcluido ? styles.textoConcluido : styles.textoProgresso]}>
                    
                    {item.status}
                    </Text>
                </View>
            </View>
        </View>
    );
}