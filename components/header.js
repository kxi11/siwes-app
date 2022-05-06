import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Header function that will be rendered in App.js
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

//Stylesheet specifications
const styles = StyleSheet.create({
    header: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        color: 'grey',
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase'

    }

});

//exports the Header fuction to App.js
export default Header;

