import { View, StyleSheet } from 'react-native'

const Retangulo = (props) =>{
    return (
        
        <View style={{
            width: props.largura || 50,
            height: props.altura || 90,
            backgroundColor: props.cor || "black"
        }}>
        </View>
    )
}

export default Retangulo