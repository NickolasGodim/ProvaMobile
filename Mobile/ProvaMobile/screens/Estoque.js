import React from "react";
import {Image,View,Button,Text,StyleSheet} from 'react-native';




export default function Estoque({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.texto}>
            <Text style={styles.letra}>PRODUTOS</Text>
            </View>
            <View style={styles.img}>
            <Image source={require('../images/maca.jpg')} style={{width:200,height:200}}/>
            <Image source={require('../images/banana.webp')} style={{width:200,height:200}}/>
            <Image source={require('../images/manga.jpg')} style={{width:200,height:200}}/>
            <Image source={require('../images/melancia.jpg')} style={{width:200,height:200}}/>
            <Image source={require('../images/laranja.jpg')} style={{width:200,height:200}}/>
            </View>
            <View style={styles.texto}>
            <Text style={styles.letra}>Maçã : Fruta Vermelha </Text>
            <Text style={styles.letra}>Banana : Fruta Amarela </Text>
            <Text style={styles.letra}>Manga : Fruta do Crash </Text>
            <Text style={styles.letra}>Melancia : Fruta Verde </Text>
            <Text style={styles.letra}>Laranja : Laranja. </Text>
            </View>
            <View style={styles.albtn}>
            <Button
            title="+"
             />0
            
            <Button
            title="-"
            />

            <Button
            title="+"
            />0

            <Button
            title="-"
            />

            <Button
            title="+"
            />0

            <Button
            title="-"
            />

            <Button
            title="+"
            />0

            <Button
            title="-"
            />

            <Button
            title="+"
            />0

            <Button
            title="-"
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    },
    img:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    texto:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    letra:{
        fontSize:24,
        fontWeight: 'bold',
        color:'green',
    },
    albtn: {
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    }
})