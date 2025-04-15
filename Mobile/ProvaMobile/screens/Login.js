import React from 'react';
import {View,Button,TextInput,StyleSheet,Text} from 'react-native';




export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.alinputs}>
            <TextInput style={styles.inputs}
            placeholder='E-mail'
            />
            <TextInput style={styles.inputs}
            placeholder='Senha'
            />
            </View>

            <Button
                onPress={()=>navigation.navigate('Estoque')}
                title="Entrar"
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
       padding: 100,
    },
    inputs:{
        alignSelf: 'center',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
    },
})