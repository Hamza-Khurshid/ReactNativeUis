import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { Button, Icon, Thumbnail, Input, Item } from 'native-base';
import BACK from '../assets/images/loginb2.jpg';

export default class LoginTwo extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
    
                <ImageBackground source={BACK} style={styles.backImage}>
                    
                    <Icon name="mountains" type="Foundation" style={{color:'#FF5665', alignSelf: 'center', marginBottom: -25, fontSize: 70, marginTop: 25}} />
                    <Text style={{color: "white", alignSelf: 'center', marginBottom: 55, fontSize: 50}}>aero</Text>

                    <View style={styles.inputView}>
                        <Item regular style={styles.input}>
                            <Icon name="user-o" type="FontAwesome" style={{color: 'white', fontSize: 15}} />
                            <Input placeholder='Username' placeholderTextColor="white" />
                        </Item>
                        <Item regular style={styles.input}>
                            <Icon name="lock" type="FontAwesome5" style={{color: 'white', fontSize: 15}} />
                            <Input placeholder='Password' placeholderTextColor="white" secureTextEntry={true}/>
                        </Item>
                    </View>

                    <View style={styles.button}>
                        <Button style={styles.buttonOrng} block success onPress={this.loginBtnHadnler}>
                            <Text style={styles.text}>Login</Text>
                        </Button>
                    </View>

                    {/* <View style={{alignSelf: 'flex-end'}}> */}
                        <View style={styles.buttonBottom}>
                            <Button block transparent info onPress={this.loginBtnHadnler}>
                                <Text style={styles.text0}>Forgot Password?</Text>
                            </Button>
                        </View>
                        <View style={styles.buttonBottom}>
                            <Button block transparent info onPress={this.loginBtnHadnler}>
                                <Text style={styles.text0}>Don't have an account?</Text>
                                <Text style={styles.text1}>{' Sign up'}</Text>
                            </Button>
                        </View>
                    {/* </View> */}

                </ImageBackground>        
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
  backImage: {
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }, 
  inputView: {
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 20
  },
  input: {
      backgroundColor: 'black',
      opacity: 0.5,
  },
  buttonOrng: {
    backgroundColor: '#FF5665'
  },
  dividerView: {
      paddingLeft: 75,
      paddingRight: 75,
      paddingTop: 25,
      paddingBottom: 25
  },
  divider: {
    height: 1,
    backgroundColor: 'black'
  },
  button: {
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 10
  },
  rowView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%'
  },
  buttonBottom: {
    flexGrow: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }, 
  text0: {
    color: 'white',
    fontWeight: 'bold'
  }, 
  text1: {
    color: '#FF5665',
    fontWeight: 'bold'
  }
});