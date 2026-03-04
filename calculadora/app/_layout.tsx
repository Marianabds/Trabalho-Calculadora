import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
      <View>
      <View style={styles.container}>
		    <View style={styles.visor}>
			    <Text style={styles.textoVisor}>0000000</Text>
        </View>

	      <View style={styles.teclado}>
          <View style={styles.linha}>
			      <TouchableOpacity style={styles.botaoC}>
              <Text>C</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container:{
      flex: 1,
      backgroundColor: "#f5f5f5",
      width: '100%'
  },
  visor:{
  flex: 1,
  height: 180,
	backgroundColor: "#f5f5f5",
	padding: 20,
	alignItems: 'flex-end',
	justifyContent: 'flex-end'
},
  teclado:{
	flex: 2,
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
	gap: 30
},
 textoVisor:{
	fontSize: 50
},
button:{
	height: 50,
	width: 50,
	alignItems: 'center',
	borderRadius: 10,
	padding: 10,
	justifyContent: 'center'
},
linha:{
  flexDirection: 'row'
}
});
