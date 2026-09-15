import {View, Text, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AULAS_DATA } from "../data/mockAulas";
import {CardAula} from "../components/CardAula/CardAula";
import {styles} from "./Home.styles";

export function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.boasVindas}>Bem-vindo de volta!</Text>
                <Text style={styles.tituloPage}>DASHBOARD DE AULAS</Text>
            </View>

            <FlatList
            data={AULAS_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <CardAula item={item}/> }
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Nenhuma aula encontrada.</Text>
                </View>
            )}
            />
        </SafeAreaView>
    );
}