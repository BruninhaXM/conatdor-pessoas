import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);

  return (

    <View style={styles.container}>
      
      <Text style={[styles.contador, count >= limit ]}>
        {count}
      </Text>

      <View style={styles.buttons}>
        <Button
          title="adicionar"
          onPress={() => {
            if (count < limit) setCount(count + 1);
            else Alert.alert("Você chegou no limite", `Limite máximo: ${limit}`);
          }}
        />

        <Button
          title="excluir"
          onPress={() => count > 0 && setCount(count - 1)}
        />
      </View>

      <Text> digite o limite aqui: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={limit.toString()}
        onChangeText={(v) => setLimit(Number(v) || 0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor:"#ADE5DC",
    padding:10,
    width:'100%',
    height:'100%',
  },
  
  contador: { 
    fontSize: 64, 
    marginBottom: 20 
  },
  
  buttons: { 
    flexDirection: "row", 
    gap: 20, 
    marginBottom: 20, 
    backgroundColor:"#6AE6BC",

  },
  
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: 100,
    textAlign: "center",
    marginTop: 10,
  },
 
 
});