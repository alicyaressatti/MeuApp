import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


// 📍 ALTERAÇÃO AULA 06: Importação dos novos componentes customizados
import {CustomInput} from "../components/CustomInput/CustomInput";
import { CustomButton } from "../components/CustomButton/CustomButton";

import { styles } from "./Cadastro.styles";

export function Cadastro({ navigation }) {
  // Mantemos os estados criados na Aula 05 para controle dos inputs
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Mantemos a função de validação criada na Aula 05
  function handleCadastro() {
    if (!email.trim() || !senha.trim() || !confirmarSenha.trim()) {
      Alert.alert("Campos incompletos", "Por favor, preencha todos os campos.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("E-mail inválido", "Digite um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Senha fraca", "A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Senhas divergentes", "As senhas não conferem.");
      return;
    }

    Alert.alert("Sucesso!", "Conta criada com sucesso!", [
      { text: "Ir para o Login", onPress: () => navigation.navigate("Login") },
    ]);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#090d16" }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerBox}>
          <Text style={styles.titulo}>CRIAR CONTA</Text>
          <Text style={styles.subtitulo}>
            Preencha os dados para se cadastrar
          </Text>
        </View>

        <View style={styles.formCard}>
          {/* 
            📍 ALTERAÇÃO AULA 06: 
            Substituição dos blocos nativos <Text> + <TextInput> pelo <CustomInput />.
            Passamos as informações visuais e de controle de estado através das PROPS.
          */}
          <CustomInput
            label="E-MAIL INSTITUCIONAL"
            placeholder="seu.nome@aluno.senai.br"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            label="SENHA"
            placeholder="••••••••"
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />

          <CustomInput
            label="CONFIRMAR SENHA"
            placeholder="••••••••"
            secureTextEntry={true}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          {/* 
            📍 ALTERAÇÃO AULA 06: 
            Substituição do <TouchableOpacity> de submissão pelo <CustomButton />.
            Enviamos o título do botão e a função de validação (handleCadastro) via PROPS.
          */}
          <CustomButton title="CADASTRAR" onPress={handleCadastro} />

          {/* Mantido o link simples para navegação */}
          <TouchableOpacity
            style={styles.linkLogin}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textoLink}>Já tem uma conta? Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
