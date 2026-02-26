import {StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function RootLayout() {
  return (
    <View>
      <View style={styles.container}>

      </View>
    </View>
  );
}

export default function App(){
  const botões = ['C', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '='];
}

const styles = StyleSheet.create({
	container:{
    backgroundColor: "#f5f5f5",
      width: '100%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
  }
});

