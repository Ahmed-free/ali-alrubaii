import  React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity,  Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({navigation }) {

return (
  <ScrollView tyle={{flex:1}}>

    <View style={styles.View}>
      <TouchableOpacity onPress={ ()=> navigation.navigate('LeaderBoard') } style={styles.TouchableOpacity} >
        <Image style={styles.Image}source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/2817802.png"}}/>
        <Text style={styles.Text}  >   لوحة الصدارة  </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> navigation.navigate('Zoom') } style={styles.TouchableOpacity}>
        <Image style={styles.Image} source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/3048590.png"}}/>          
        <Text style={styles.Text}>   المحاضرات   </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.View}>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={styles.TouchableOpacity}>
        <Image style={styles.Image} source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/2436683.png"}}/>
        <Text  style={styles.Text}>الملف الشخصي</Text>
      </TouchableOpacity> 

      <TouchableOpacity onPress={()=> navigation.navigate('Malzama')} style={styles.TouchableOpacity} >
        <Image style={styles.Image} source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/square-ali.png"}}/>
        <Text style={styles.Text}>ملزمة الذكاء</Text>
      </TouchableOpacity>
    </View>
    
    <View style={styles.View}>
    <TouchableOpacity onPress={()=> navigation.navigate('Help')} style={styles.TouchableOpacity} >
      <Image style={styles.Image} source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/4961759.png"}}/>
      <Text style={styles.Text}>احتاج مساعدة </Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={()=> navigation.navigate('StartMeeting')} style={styles.TouchableOpacity} >
      <Image style={styles.Image} source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/4961759.png"}}/>
      <Text style={styles.Text}> start metting</Text>
    </TouchableOpacity>
    </View>
  </ScrollView>
  ) 
}


const styles ={
  View:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingBottom :5,
    backgroundColor: '#ffd5c0'
  },
  TouchableOpacity:{
    width:'45%',
    backgroundColor:'white',
    alignItems :'center',
    padding :10,
    marginTop:20,
    borderRadius:20,
  },
  Image:{
    justifyContent:'center',
    width: 120,
    height: 120,
    paddingTop :20,
  },
  Text:{
    width:'100%',
    marginTop:20,
    padding:10,
    borderRadius:20,
    backgroundColor:'gold',
    color:'black',
    fontSize:16,
    textAlign: 'center'
  }


}