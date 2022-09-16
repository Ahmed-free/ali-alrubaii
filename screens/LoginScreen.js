
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {  Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Linking } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen ()  {

  const websiteURl = "https://elitestudents.link"
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ErrorMsg, setErrorMsg] = useState('')

  useEffect(()=>{
    setErrorMsg('')
    AsyncStorage.getItem('ID')
    .then(value =>{
      if(value !== null){
        navigation.replace('Home')}})
  },[])



  function handleLogin () {
     axios({
      method: 'post',
      url:websiteURl+"/wp-json/custom_users/login",
      data:{
        username:email,
        password:password
      },
    })
    .then(res=>{
      AsyncStorage.setItem('ID',res.data.ID.toString())
      navigation.replace('Home')})

    .catch( ()=>{
      if(email =='' || password==''){
       setErrorMsg('يرجى ملئ جميع الحقول')}
      
      else
      {setErrorMsg('هذا الحساب غير موجود, تاكد من المعلومات او سجل كطالب جديد')}
      
    })
    

    }
    

  return (

  <KeyboardAvoidingView style={styles.container}>
    <Image style={{width:150,height:150,}} source={{uri:'https://elitestudents.link/wp-content/uploads/2022/09/square-ali.png'}}/>
    <Text style={{color:'red',fontSize:20}}>{ErrorMsg}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="الايميل"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="الباسورد" 
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
    </View>

    <View style={styles.buttonContainer}>
    
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>تسجيل الدخول</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>

  )
}



const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      borderWidth:1,
      borderColor: 'grey'
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    button: {
      backgroundColor: 'gold',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 15,

    },
    buttonOutline: {
      backgroundColor: 'black',
      marginTop: 5,
      borderColor: 'orange',
      borderWidth: 2,
    },
    buttonText: {
      color: 'black',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: 'gold',
      fontWeight: '700',
      fontSize: 16,
    },
  })


  
  