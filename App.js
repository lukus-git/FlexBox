import { StyleSheet, View, Text } from 'react-native';
import Quadrado from './components/Quadrado';
import Retangulo from './components/Retangulo';

export default function App() {
  return (


    <View style={styles.container}>
      <View style={styles.top}>

        <View style={styles.cimaEsquerda}>
          <View style={styles.bloco}>
            <Quadrado cor="#490a3d" largura={80} altura={30}/>
            <Quadrado cor="#490a3d" largura={80} altura={30}/>
          </View>

          <View style={styles.bloco}>
            <Quadrado cor="#490a3d" largura={80} altura={30}/>
            <Quadrado cor="#490a3d" largura={80} altura={30}/>
          </View>

          <View style={styles.bloco}>
            <Quadrado cor="#490a3d" largura={80} altura={30}/>
            <Quadrado cor="#490a3d" largura={80} altura={30}/>
          </View>
        </View>

        <View style={styles.cimaDireita}>
          <Retangulo cor="#490a3d" largura={80} altura={30}/>
          <Retangulo cor="#bd1550" largura={80} altura={60}/>
        </View>
      </View>
      
      <View style={styles.meio}>
        <Retangulo cor="#490a3d" altura="100%" largura={70} />
        <Retangulo cor="#bd1550" altura="100%" largura={70} />
        <Retangulo cor="#e97f02" altura="100%" largura={70} />
        <Retangulo cor="#f8ca00" altura="100%" largura={70} />
      </View>

      <View style={styles.baixo}>
        <Retangulo cor="#490a3d" altura={40} largura={80} />
        <Retangulo cor="#bd1550" altura={60} largura={80} />
        <Retangulo cor="#e97f02" altura={80} largura={80} />
        <Retangulo cor="#f8ca00" altura={100} largura={80} />
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top:{
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
  },

  cimaDireita: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingLeft:10,
    alignItems:'flex-start',
    backgroundColor: '#c1a2a0',
  },

  cimaEsquerda: {
    flex:1,
    justifyContent: 'space-around',
    borderRightWidth:1,
    backgroundColor: '#c1a2a0'
  },

  bloco:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  meio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: '#725b75'
  },

  baixo: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: '#322030'
  }
});