import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Header from './components/header';
import InputBar from './components/inputbar';
import LogItem from './components/logitem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

//creates the App class
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
         
    }
  }

  //renders the components to screen
  render() { //renders components to the screen
    const statusbar = (Platform.OS === 'ios') ? <View styles={styles.statusbar}></View> : <View></View>;

    //{statusbar} makes a status bar based on if the platform is ios else it doesn't
    //<Header> pulls the Header component from the header file and renders it
    //<InputBar> Renders the inputbar component
    return (

      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options = {{headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options = {{headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options = {{headerShown: false }} name="Register" component={RegisterScreen} />
        <Stack.Screen options = {{headerShown: false }} name="Profile" component={ProfileScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}


//Stylesheet specifications
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#342F4E',
  },
  statusbar: {
    backgroundColor: '#ffce00',
    height: 20
  }
});
