import React from 'react';
import { StyleSheet, View, Text, AsyncStorage, Button } from 'react-native';
//import HomeScreen from './HomeScreen';


export default class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            name: ''
        };
        this._bootstrap();
        
      
    }

    _bootstrap = async () => {
        const userName = await AsyncStorage.getItem('userName');
        this.setState({ name: userName });
    }


    async logout(navigate) {
        try{
          await AsyncStorage.clear()
          .then(
            () => {
                navigate('Auth');
            }
          );
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Welcome {this.state.name}</Text>
                <Text>to Profile Screen</Text>
                <Button title="Log Out" onPress={() => this.logout(navigate)}>
                    Log Out
                </Button>
            </View> 
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});