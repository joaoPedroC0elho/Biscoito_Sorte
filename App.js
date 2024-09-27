import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("./src/image/biscoito.png"));
  const [textFrase, setTextFrase] = useState("");

  let frases = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso.",
    "A vida é curta, aproveite cada momento.",
    "A felicidade está nas pequenas coisas.",
    "Confie em si mesmo e tudo será possível.",
    "Grandes conquistas começam com pequenos passos.",
    "O otimismo é o ímã da felicidade.",
    "Você é mais forte do que pensa.",
    "Faça hoje o que seu futuro vai agradecer.",
    "Nunca é tarde para recomeçar.",
    "A persistência é o caminho do êxito.",
    "Cada dificuldade traz consigo uma lição.",
    "Sonhe alto e trabalhe duro.",
    "A sorte favorece os preparados.",
    "Transforme seus sonhos em metas.",
    "Seja a mudança que você quer ver no mundo.",
    "Cair é permitido, levantar é obrigatório.",
    "Toda jornada começa com o primeiro passo.",
  ];

  const quebraBiscoito = () => {
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextFrase(`"${frases[numeroAleatorio]}"`);
    setImg(require("./src/image/biscoitoAberto.png"));
  };

  function reiniciarBiscoito() {
    setImg(require("./src/image/biscoito.png"));
    setTextFrase("");
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{textFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: "#121212" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#121212" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: "black",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#007BFF",
    borderWidth: 2,
    borderRadius: 19,
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
  },
});
