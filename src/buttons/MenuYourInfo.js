import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create ({
    buttonContainer: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        padding: 5,
    },
    buttonTxt: {
        color: '#000',
    },
});

const MenuYourInfo = props => {
    return(
        <View>
            <TouchableHighlight onPress={ props.onMenuYourInfo } underlayColor='blue'>
                <View style={ styles.buttonContainer } >
                    <Text style={ styles.buttonTxt }>Your info</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default MenuYourInfo;