import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import { collection } from 'firebase/firestore'
import { auth, db } from '../firebase'
import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const ref = collection(db, "profiles");

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Register")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered in with: ', user.email);
      })
      .catch(error => alert(error.message))
    if (auth.currentUser) {
      navigation.replace("Register")
    }
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with: ', user.email);
      })
      .catch(error => alert(error.message))

    if (auth.currentUser) {
      navigation.replace("Home")
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">

      <View>
        <Image
          style={{ width: 250, height: 250 }}
          source={{ uri: 'https://yt3.ggpht.com/a/AGF-l79SeAEqp4CvG_EAONZnGRfG0eK_W_Iopwgb1Q=s900-c-k-c0xffffffff-no-rj-mo' }}
        />
      </View>
      <Header title='DIGITAL LOGBOOK' />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Button>
            Login
          </Button>
        </TouchableOpacity>
        {!password ? (
          <View>
          </View>
        ) : (
          <TouchableOpacity onPress={handleSignUp}>
            <Button className='mt-3'>
              Register
            </Button>
          </TouchableOpacity>
        )}

      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,

  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})