import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { Button, Icon, Thumbnail, Input, Item } from 'native-base';
import BACK from '../assets/images/loginb1.jpg';
import CAMERA from '../assets/images/camera.png';

export default class LoginOne extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
    
                <ImageBackground source={BACK} style={styles.backImage}>
                    <Text></Text>

                    <Thumbnail square large source={CAMERA} style={{alignSelf: 'center', marginBottom: 55}} />

                    <View style={styles.inputView}>
                        <Item regular style={styles.input}>
                            <Icon name="mail" type="AntDesign" />
                            <Input placeholder='E-mail address' />
                        </Item>
                        <Item regular style={styles.input}>
                            <Icon name="lock1" type="AntDesign" />
                            <Input placeholder='********' secureTextEntry={true} />
                        </Item>
                    </View>

                    <View style={styles.button}>
                        <Button style={styles.buttonOrng} block success onPress={this.loginBtnHadnler}>
                            <Text style={styles.text}>Sign in</Text>
                        </Button>
                    </View>

                    <View style={styles.dividerView}>
                        <Text style={styles.divider}></Text>
                    </View>

                    <View style={styles.button}>
                        <Button block primary onPress={this.loginBtnHadnler}>
                            <Icon name="sc-facebook" type="EvilIcons" />
                            <Text style={styles.text}>Sign in with Facebook</Text>
                        </Button>
                    </View>

                    <View style={styles.button}>
                        <Button block info onPress={this.loginBtnHadnler}>
                            <Icon name="twitter" type="AntDesign" />
                            <Text style={styles.text}>Sign in with Twitter</Text>
                        </Button>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={styles.buttonBottom}>
                            <Button block transparent info onPress={this.loginBtnHadnler}>
                                <Text style={styles.text0}>Forgot Password?</Text>
                            </Button>
                        </View>
                        <View style={styles.buttonBottom}>
                            <Button block transparent info onPress={this.loginBtnHadnler}>
                                <Text style={styles.text1}>New here? Sign up</Text>
                            </Button>
                        </View>
                    </View>

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
    marginBottom: 10
  },
  input: {
      backgroundColor: 'white',
  },
  buttonOrng: {
    backgroundColor: '#FE6100'
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
    color: 'white'
  }, 
  text0: {
    color: '#888888',
  }, 
  text1: {
    color: '#888888',
    textDecorationLine: 'underline',
  }
});