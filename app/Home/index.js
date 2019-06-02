import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'native-base';

export default class Home extends Component {

    loginBtnHadnler = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.button}>
                    <Button block success onPress={this.loginBtnHadnler}>
                        <Text style={styles.text}>Login</Text>
                    </Button>
                </View>

                <View style={styles.button}>
                    <Button block success onPress={this.loginBtnHadnler}>
                        <Text style={styles.text}>Dashboard</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    btn: {
        width: '100%',
    },
    text: {
        color: 'white'
    }
});