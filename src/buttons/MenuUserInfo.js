import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    buttonContainer: {
        backgroundColor: 'gray',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    buttonText: {
        color: '#000',
    },
});

const MenuUserInfo = props => {
    return(
        <View>
            <TouchableHighlight onPress={ props.onMenuUserInfo } underlayColor='white'>
                <View style={ styles.buttonContainer }>
                    <Text style={ styles.buttonText }>User's info</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default MenuUserInfo;