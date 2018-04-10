import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    buttonContainer: {
        padding: 10,
    },
    button: {
        height: 40,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    buttonText: {
        color: '#fff',
    },
});

const SubmitButton = props => {
    return (
        <View style={styles.buttonContainer} >
            <TouchableHighlight onPress={ props.onSubmit } underlayColor = "white" >
                <View style={ styles.button } >
                    <Text style={ styles.buttonText } >Submit</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default SubmitButton;