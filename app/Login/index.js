import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'native-base';

import { StyleSheet } from 'react-native';

export default class LoginScreens extends Component {
    
    homeBtnHadnler = () => {
        this.props.navigation.navigate('LoginOne');
    }

    home2BtnHadnler = () => {
        this.props.navigation.navigate('LoginTwo');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnView}>
                    <Button block success onPress={this.homeBtnHadnler}>
                        <Text style={{color: "white"}}>Login 1</Text>
                    </Button>
                </View>
                <View style={styles.btnView}>
                    <Button block success onPress={this.home2BtnHadnler}>
                        <Text style={{color: "white"}}>Login 2</Text>
                    </Button>
                </View>
                <View style={styles.btnView}>
                    <Button block success onPress={this.homeBtnHadnler}>
                        <Text style={{color: "white"}}>Login 3</Text>
                    </Button>
                </View>
                <View style={styles.btnView}>
                    <Button block success onPress={this.homeBtnHadnler}>
                        <Text style={{color: "white"}}>Login 4</Text>
                    </Button>
                </View>
                <View style={styles.btnView}>
                    <Button block success onPress={this.homeBtnHadnler}>
                        <Text style={{color: "white"}}>Login 5</Text>
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
      padding: 20,
    }, 
    btnView: {
        width: '100%',
        paddingBottom: 15,
    },
});  