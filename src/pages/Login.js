import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// IMPORTAÇÃO DOS COMPONENTES REUTILIZÁVEIS
import { CustomInput } from "../components/CustomInput/CustomInput";
import { CustomButton } from "../components/CustomButton/CustomButton";

import { styles } from "./Login.styles";

export function Login({ navigation }) {
  // 1. ESTADOS PARA ARMAZENAR OS DADOS DE ENTRADA
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // 2. FUNÇÃO DE VALIDAÇÃO E AUTENTICAÇÃO
  function handleLogin() {
    // Validação 1: Verificar se os campos estão preenchidos
    if (!email.trim() || !senha.trim()) {
      Alert.alert("Campos incompletos", "Por favor, informe seu e-mail e senha para entrar.");
      return;
    }

    // Validação 2: Verificar formato básico do e-mail
    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("E-mail inválido", "Por favor, insira um e-mail válido.");
      return;
    }

    // Validação 3: Verificar tamanho mínimo da senha
    if (senha.length < 6) {
      Alert.alert("Senha incorreta", "A senha digitada deve ter no mínimo 6 caracteres.");
      return;
    }

    // Sucesso: Redireciona o usuário para o Dashboard (Home)
    Alert.alert("Bem-vindo!", "Login realizado com sucesso!", [
      {
        text: "Acessar Dashboard",
        onPress: () => navigation.replace("Home"),
      },
    ]);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#090d16" }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.headerBox}>
          <Text style={styles.titulo}>BEM-VINDO</Text>
          <Text style={styles.subtitulo}>Insira suas credenciais para continuar</Text>
        </View>

        <View style={styles.formCard}>
          {/* CONSUMO DO COMPONENTE CUSTOMINPUT PARA O E-MAIL */}
          <CustomInput 
            label="E-MAIL INSTITUCIONAL"
            placeholder="seu.nome@aluno.senai.br"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* CONSUMO DO COMPONENTE CUSTOMINPUT PARA A SENHA */}
          <CustomInput 
            label="SENHA"
            placeholder="••••••••"
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />

          {/* CONSUMO DO COMPONENTE CUSTOMBUTTON */}
          <CustomButton 
            title="ENTRAR" 
            onPress={handleLogin} 
          />

          <TouchableOpacity 
            style={styles.linkCadastro} 
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.textoLink}>Não tem uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}