import { useState, useEffect } from "react";
import {View,Text,FlatList,ActivityIndicator,Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardAula } from "../components/CardAula/CardAula";
import { styles } from "./Home.styles";
import { getPosts } from "../services/api";
import { colors } from "../theme/colors";

export function Home() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function carregarDados() {

        try {

            setLoading(true);

            const dados = await getPosts();

            const dadosFormatados = dados.map((item) => ({
                id: String(item.id),
                titulo: `${item.id}. ${item.title}`,
                descricao: item.body,
                status: "Ativo",
            }));

            setPosts(dadosFormatados);

        } catch (error) {

            Alert.alert(
                "Erro de conexão.",
                "Não foi possível carregar as informações. Tente novamente."
            );

        } finally {

            setLoading(false);

        }
    }

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>

                <Text style={styles.boasVindas}>
                    Bem-vindo de volta!
                </Text>
                <Text style={styles.tituloPage}>
                    DASHBOARD DE AULAS
                </Text>

            </View>

            <FlatList
                data={posts}

                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (
                    <CardAula item={item} />
                )}

                contentContainerStyle={styles.listContent}

                showsVerticalScrollIndicator={false}

                refreshing={loading}

                onRefresh={carregarDados}

                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>

                        {loading ? (

                            <ActivityIndicator
                                size="large"
                                color={colors.primary || "#00d2ff"}
                            />

                        ) : (

                            <Text style={styles.emptyText}>
                                Nenhuma aula encontrada.
                            </Text>

                        )}

                    </View>
                )}
            />

        </SafeAreaView>
    );
}