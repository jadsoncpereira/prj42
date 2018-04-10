import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import UsersInfo from './UsersInfo';

export default class YourInfo extends Component {
    static navigationOptions = {
        title: 'Your info',
    };

    static infos = {
        name: 'Jadson',
        lastName: 'Carvalho',
        username: 'jadson.pereira',
        email: 'jadson.pereira@dcomp.ufs.br',
    };

    render() {
        return (
            <View style={ styles.container }>
                <View style={{ flexDirection: 'row' }} >
                    <View>
                        <Text style={ styles.text } >Name:  </Text>
                    </View>
                    <View>
                        <Text style={ styles.normalText }>{YourInfo.infos.name}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <View>
                    <Text style={ styles.text } >Last name:  </Text>
                    </View>
                    <View>
                        <Text style={ styles.normalText }>{YourInfo.infos.lastName}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <View>
                        <Text style={ styles.text } >Username:  </Text>
                    </View>
                    <View>
                        <Text style={ styles.normalText }>{YourInfo.infos.username}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <View>
                        <Text style={ styles.text } >Email:  </Text>
                    </View>
                    <View>
                        <Text style={ styles.normalText }>{YourInfo.infos.email}</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: 10,
    },
    text: {
        color: '#000',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    normalText: {
        color: 'blue',
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10,
    },
});