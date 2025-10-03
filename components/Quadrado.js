import { View, StyleSheet } from 'react-native'

const Quadrado = (props) => {
    return (
        <View style={{
            width: props.largura || 50,
            height: props.altura || 50,
            backgroundColor: props.cor || "black"
        }}>
        </View>
    )
}

export default Quadrado