import React from 'react';
import { 
    Dimensions,
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
            spinner: false
        };

        this._signInHandler = this._signInHandler.bind(this);
    }

    _signInHandler = async () => {
        const {email, password} = this.state;

        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        this.setState({spinner: true});

        // const response = await fetch(`https://fastassurance1111.herokuapp.com/users/authenticate`, {
        //     method: 'POST', 
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }, 
        //     body: formData
        // })
        // .then(resp => {
        //     this.setState({spinner: false});
        //     console.log(resp.json());
        //     return resp.json();
        // })
        // .catch(error => {
        //     this.setState({spinner: false});
        //      console.log(error);
        //     throw error;
        // });




        const response = await axios.post("https://fastassurance1111.herokuapp.com/users/authenticate",{
            username: email,
            password: password
        })
        .then((resp) => {
            this.setState({spinner: false});
            console.log(resp.data.token);
            return resp;
        })
        .catch((error) => {
            this.setState({spinner: false});
             console.log(error);
            throw error;
        });


  




        if (typeof response.data.token != "undefined") {
           
            await AsyncStorage.setItem("userToken", response.data.token);
            await AsyncStorage.setItem("userName", response.data.username);
            this.props.navigation.navigate('App');
        }
        else {
             Alert.alert('Error', response);
        }
    }

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
                    {this.state.spinner &&
                        <Text style={style.spinnerTextStyle}>Processing ...</Text>
                    }
                    {!this.state.spinner &&
                        <Button
                            title="Sign in!"
                            onPress={this._signInHandler}
                        />
                    }
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
        marginBottom: 30,
        paddingLeft: 15
    },
    spinnerTextStyle: {
        textAlign: 'center'
    },
});