import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
		    <View style={styles.visor}>
			    <Text style={styles.textoVisor}>0000000</Text>
        </View>

	      <View style={styles.teclado}>
          <View style={styles.linha}>
			      <TouchableOpacity style={styles.botaoAmarelo}>
              <Text style={styles.digito}>C</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoAmarelo}>
              <Text style={styles.digito}>DEL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoAmarelo}>
              <Text style={styles.digito}>%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosa}>
              <Text style={styles.digito}>/</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
			      <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosa}>
              <Text style={styles.digito}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
			      <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosa}>
              <Text style={styles.digito}>x</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
			      <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosa}>
              <Text style={styles.digito}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
			      <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosaClaro}>
              <Text style={styles.digito}>+=</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoRosa}>
              <Text style={styles.digito}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
	container:{
      flex: 1,
      backgroundColor: "#e6e0e0ff"
  },
  visor:{
  flex: 1,
    backgroundColor: "#e6e0e0ff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 40,
    marginBottom: 1
},
  teclado:{
	flex: 2,
    padding: 20,
    gap: 12,
    justifyContent: "center"
},
 textoVisor:{
	fontSize: 50
},
linha:{
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: 10
},
botaoAmarelo:{
  flex: 1,
  height: 75,
  borderRadius: 16,
  backgroundColor: '#eed650ff',
  justifyContent: 'center',
  alignItems: 'center'
},
botaoRosa:{
  flex: 1,
  height: 75,
  borderRadius: 16,
  backgroundColor: '#c2426fff',
  justifyContent: 'center',
  alignItems: 'center'
},
botaoRosaClaro:{
  flex: 1,
  height: 75,
  borderRadius: 16,
  backgroundColor: '#eeacbaff',
  justifyContent: 'center',
  alignItems: 'center'
},
digito:{
  fontSize: 23,
  fontWeight: '450'
}
});
