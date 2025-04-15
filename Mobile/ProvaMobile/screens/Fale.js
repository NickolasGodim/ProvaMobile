import React from 'react';
import {View,Button,TextInput,StyleSheet,Text,Image} from 'react-native';




export default function Fale({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.img}>
            <Image source={require('../images/top.jpg')} style={{width:200,height:200}}/>
            </View>
            <View style={styles.alinputs}>
            <TextInput style={styles.inputs}
            placeholder='Nome'
            />
            <TextInput style={styles.inputs}
            placeholder='E-mail'
            />
            <TextInput style={styles.inputs}
            placeholder='Mensagem'
            />
            </View>

            <Button 
                title="Enviar"
             />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    },
    alinputs:{
        justifyContent: 'space-around',
    },
    inputs:{
        alignSelf: 'center',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
    },
    alinputs:{
        padding: 40,
    },
    img:{
        alignSelf: 'center',
        padding: 50,
    }
})