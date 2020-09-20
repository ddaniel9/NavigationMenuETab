import React from 'react';
import {TextLink} from '../../components/common';
import { 
    Dimensions,TouchableOpacity,
    KeyboardAvoidingView, View, Button, Alert, Text, AsyncStorage, StyleSheet, TextInput
} from 'react-native';
import axios from 'axios';


export default class SigninScreen extends React.Component {

    static navigationOptions = {
        headerShown: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '', 
            password_confirmation:'',
            error: '',
            spinner: false
        };

        this.registerUser = this.registerUser.bind(this);
        this.onRegistrationFail = this.onRegistrationFail.bind(this);    }




    registerUser() {
        const { email, password, password_confirmation } = this.state;
        this.setState({ error: '', spinner: true });
        
        // NOTE HTTP is insecure, only post to HTTPS in production apps
        if(this.state.password==this.state.password_confirmation){
              axios.post("https://fastassurance1111.herokuapp.com/users/register",{
            
                email: email,
                password: password,
                username: email,
                firstName: email,
                lastName : email
                //password_confirmation: password_confirmation
            
            },)
            .then((response) => {
            // Handle the JWT response here
            console.log(response);
             axios.post("https://fastassurance1111.herokuapp.com/users/authenticate",{
                                password: password,
                                username: email
                            },)
                            .then((response) => {
                            // Handle the JWT response here
                            console.log(response.data.token);
                            if (typeof response.data.token != "undefined") {
           
                                 AsyncStorage.setItem("userToken", response.data.token);
                                 AsyncStorage.setItem("userName", response.data.username);
                                this.props.navigation.navigate('App');
                            }
                            else {
                                 Alert.alert('Error', response);
                            } 
                            //this.props.newJWT(response.data.token);
                            //deviceStorage.saveKey("id_token", response.data.token);
                            })
                            .catch((error) => {
                            // Handle returned errors here
                            console.log(error);
                            });
            }) 
            .catch((error) => {
            // Handle returned errors here
            console.log(error);
            this.onRegistrationFail('Registration Failed',false);
            });
        }else{
            console.log(error);
            this.onRegistrationFail('Password Confirm is incorrect',false);
        }
      }
    
      onRegistrationFail(message,onOffspinner) {
        this.setState({
          error: message,
          spinner: onOffspinner
        });
      }
      



    
    goToLogin = () => this.props.navigation.navigate('Login');

    // _loginHandler = async () => {
    //     const {email, password} = this.state;

    //     var formData = new FormData();
    //     formData.append('email', email);
    //     formData.append('password', password);

    //     this.setState({spinner: true});

    //     const response = await axios.post("https://fastassurance1111.herokuapp.com/users/authenticate",{
    //         username: email,
    //         password: password
    //     })
    //     .then((resp) => {
    //         this.setState({spinner: false});
    //         console.log(resp.data.token);
    //         return resp;
    //     })
    //     .catch((error) => {
    //         this.setState({spinner: false});
    //          console.log(error);
    //         throw error;
    //     });


    //     if (typeof response.data.token != "undefined") {
           
    //         await AsyncStorage.setItem("userToken", response.data.token);
    //         await AsyncStorage.setItem("userName", response.data.username);
    //         this.props.navigation.navigate('App');
    //     }
    //     else {
    //          Alert.alert('Error', response);
    //     }
    // }

    render() {
        return (
            <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" enabled>
                <View style={style.container}>
                    <TextInput 
                        keyboardType="email-address"
                        onChangeText={email => this.setState({email})}
                        style={style.input}
                        placeholder="Email Address"
                        value={this.state.email}
                    />
                    <TextInput 
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                        style={style.input}
                        placeholder="Password"
                        value={this.state.password}
                    />
                    <TextInput 
                        secureTextEntry={true}
                        onChangeText={password_confirmation => this.setState({password_confirmation})}
                        style={style.input}
                        placeholder="Password Confirm"
                        value={this.state.password_confirmation}
                    />
                    {this.state.spinner &&
                        <Text style={style.spinnerTextStyle}>Processing ...</Text>
                    }
                    {!this.state.spinner &&
                        <Button
                            title="Sign In"
                            onPress={this.registerUser}
                        />
                    }
                    {!this.state.spinner &&
                    <TextLink onPress={this.goToLogin}>
                    Already have an account? Log in!
                    </TextLink>
                    }
                    <Text style={style.errorTextStyle}>
                        {this.state.error}
                    </Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    input: {
        backgroundColor: '#DAE1F1',
        width: DEVICE_WIDTH - 100,
        height: 40,
        marginHorizontal: 20,
        borderRadius: 20,
        color: '#333333',
        marginBottom: 10,
        paddingLeft: 15
    },
    spinnerTextStyle: {
        textAlign: 'center'
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
      },
});



