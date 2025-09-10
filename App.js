import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function App() {
  const [img1, setImg1] = useState(require("./src/escola1.png"));
  const [img2, setImg2] = useState(require("./src/escola3.png"));
  const [img3, setImg3] = useState(require("./src/escola5.png"));
  const [img4, setImg4] = useState(require("./src/escola8.png"));

  function mudarImg1() {
    setImg1(
      img1 === require("./src/escola1.png")
        ? require("./src/escola2.png")
        : require("./src/escola1.png")
    );
  }

  function mudarImg2() {
    setImg2(
      img2 === require("./src/escola3.png")
        ? require("./src/escola4.png")
        : require("./src/escola3.png")
    );
  }

  function mudarImg3() {
    setImg3(
      img3 === require("./src/escola5.png")
        ? require("./src/escola6.png")
        : require("./src/escola5.png")
    );
  }

  function mudarImg4() {
    setImg4(
      img4 === require("./src/escola8.png")
        ? require("./src/escola7.png")
        : require("./src/escola8.png")
    );
  }

  return (
    <View style={styles.principal}>
      <View style={styles.container1}>
        <Image source={img1} style={styles.imagem1} />
        <TouchableOpacity style={styles.botao1} onPress={mudarImg1}>
        <Image
            source={require('./src/refresh.png')}
            style={styles.icon}
          />
          <Text style={styles.botaoTexto}>MUDAR IMAGEM</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <Image source={img2} style={styles.imagem2} />
        <TouchableOpacity style={styles.botao2} onPress={mudarImg2}>
        <Image
            source={require('./src/refresh.png')}
            style={styles.icon}
          />
          <Text style={styles.botaoTexto}>MUDAR IMAGEM</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container3}>
        <Image source={img3} style={styles.imagem3} />
        <TouchableOpacity style={styles.botao3} onPress={mudarImg3}>
          {/* Ícone do botão */}
          <Image
            source={require('./src/refresh.png')}
            style={styles.icon}
          />
          {/* Texto do botão */}
          <Text style={styles.botaoTexto}>MUDAR IMAGEM</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container4}>
        <Image source={img4} style={styles.imagem4} />
        <TouchableOpacity style={styles.botao4} onPress={mudarImg4}>
        <Image
            source={require('./src/refresh.png')}
            style={styles.icon}
          />
          <Text style={styles.botaoTexto}>MUDAR IMAGEM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b5b56b",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#864c22",
  },
  container3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c95e5e",
  },
  container4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5e9cc9",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imagem1: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
  },
  imagem2: {
    width: 140,
    height: 140,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
  },
  imagem3: {
    width: 160,
    height: 160,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
  },
  imagem4: {
    width: 160,
    height: 160,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
  },
  botao1: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  botao2: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  botao3: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row', 
    alignItems: 'center',  
  },
  botao4: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10, 
  },
  icon: {
    width: 20,  
    height: 20, 
  },
});
