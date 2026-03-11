
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [visor, setVisor] = useState("0");
  const [primeiroNumero, setPrimeiroNumero] = useState(null);
  const [operacao, setOperacao] = useState(null);
  const [esperandoNumero, setEsperandoNumero] = useState(false);

  function clicarNumero(num) {
    if (visor === "0" || esperandoNumero) {
      setVisor(num);
      setEsperandoNumero(false);
    } else {
      setVisor(visor + num);
    }
  }

  function clicarOperacao(op) {
    setPrimeiroNumero(parseFloat(visor));
    setOperacao(op);
    setEsperandoNumero(true);
  }

  function calcular() {
    const segundoNumero = parseFloat(visor);
    let resultado = 0;

    if (operacao === "+") {
      resultado = primeiroNumero + segundoNumero;
    }

    if (operacao === "-") {
      resultado = primeiroNumero - segundoNumero;
    }

    if (operacao === "*") {
      resultado = primeiroNumero * segundoNumero;
    }

    if (operacao === "/") {
      resultado = primeiroNumero / segundoNumero;
    }

    setVisor(resultado.toString());
    setPrimeiroNumero(null);
    setOperacao(null);
    setEsperandoNumero(false);
  }

  function limpar() {
    setVisor("0");
    setPrimeiroNumero(null);
    setOperacao(null);
    setEsperandoNumero(false);
  }

  function inverterSinal() {
    if (visor !== "0") {
      if (visor.startsWith("-")) {
        setVisor(visor.slice(1));
      } else {
        setVisor("-" + visor);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.visor}>
        <Text style={styles.textoVisor}>{visor}</Text>
      </View>

      <View style={styles.teclado}>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botaoAmarelo} onPress={limpar}>
            <Text style={styles.digito}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoAmarelo} onPress={inverterSinal}>
            <Text style={styles.digito}>+-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoAmarelo}>
            <Text style={styles.digito}>%</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosa} onPress={() => clicarOperacao("/")}>
            <Text style={styles.digito}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha}>
          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero("7")}>
            <Text style={styles.digito}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero("8")}>
            <Text style={styles.digito}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero("9")}>
            <Text style={styles.digito}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosa} onPress={() => clicarOperacao("-")}>
            <Text style={styles.digito}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha}>
          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero("4")}>
            <Text style={styles.digito}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero("5")}>
            <Text style={styles.digito}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero("6")}>
            <Text style={styles.digito}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosa} onPress={() => clicarOperacao("*")}>
            <Text style={styles.digito}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha}>
          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero("1")}>
            <Text style={styles.digito}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero("2")}>
            <Text style={styles.digito}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero("3")}>
            <Text style={styles.digito}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosa} onPress={() => clicarOperacao("+")}>
            <Text style={styles.digito}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha}>
          <TouchableOpacity style={styles.botaoRosaClaro} onPress={() => clicarNumero(".")}>
            <Text style={styles.digito}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoZero} onPress={() => clicarNumero("0")}>
            <Text style={styles.digito}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoRosa} onPress={calcular}>
            <Text style={styles.digito}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9faxj"
  },
  visor: {
    flex: 1,
    backgroundColor: "#f8f9faxj",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 40,
    marginBottom: 1
  },
  teclado: {
    flex: 2,
    padding: 20,
    gap: 12,
    justifyContent: "center"
  },
  textoVisor: {
    fontSize: 50
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 10
  },
  botaoAmarelo: {
    flex: 1,
    height: 75,
    borderRadius: 16,
    backgroundColor: '#eed650ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoRosa: {
    flex: 1,
    height: 75,
    borderRadius: 16,
    backgroundColor: '#c2426fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoRosaClaro: {
    flex: 1,
    height: 75,
    borderRadius: 16,
    backgroundColor: '#eeacbaff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoZero: {
    flex: 2,
    height: 75,
    borderRadius: 16,
    backgroundColor: '#eeacbaff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  digito: {
    fontSize: 23,
    fontWeight: '450'
  }
});
