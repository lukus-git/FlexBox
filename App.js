import { StyleSheet, View, Text } from 'react-native';
import Quadrado from './components/Quadrado';
import Retangulo from './components/Retangulo';

export default function App() {
  return (


    <View style={styles.container}>

      <View style={styles.cimaDireita}>

        <Quadrado cor="#490a3d" lado={10}/>
        <Quadrado cor="#bd1550" lado={50}/> 

      </View>

      <View style={styles.cimaEsquerda}>

        <Quadrado cor="#490a3d" lado={10}/>
        <Quadrado cor="#bd1550" lado={50}/>
        <Quadrado cor="#e97f02" lado={50}/>
      </View>

      <View style={styles.meio}>
        <Retangulo cor="#490a3d" altura={312} largura={70}/>
        <Retangulo cor="#bd1550" altura={312} largura={70}/>
        <Retangulo cor="#e97f02" altura={312} largura={70}/>
        <Retangulo cor="#f8ca00" altura={312} largura={70}/>
      </View>

      <View style={styles.baixo}>
        <Quadrado cor="#490a3d" altura={40} largura={80}/>
        <Quadrado cor="#bd1550" altura={60} largura={80}/>
        <Quadrado cor="#e97f02" altura={80} largura={80}/>
        <Quadrado cor="#f8ca00" altura={100} largura={80}/>
      </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  cimaDireita:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    width: '100%',
    backgroundColor:'#c1a2a0'
  },

  cimaEsquerda:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    width: '100%',
    backgroundColor:'#c1a2a0'
  },

  meio:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'flex-end',
    width: '100%',
    backgroundColor:'#725b75'  
  },

  baixo:{
    flex:1,
    justifyContent:'space-evenly',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: '#322030'
  }
});