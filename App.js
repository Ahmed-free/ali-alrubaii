import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ZoomScreen from './screens/ZoomScreen';
import LoginScreen from './screens/LoginScreen';
import SecondFormScreen from './screens/SecondFormScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LeaderBoardScreen from './screens/LeaderBoardScreen';
import MalzmaScreen from './screens/MalzmaScreen';
import StartMeeting from './screens/StartMeeting';


const Stack = createNativeStackNavigator();

export default  function App() {
 
return (

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Login' component={LoginScreen} options={{title:'تسجيل الدخول',headerTitleAlign:'center'}}/>
    <Stack.Screen name='Home' component={HomeScreen} options={{title:'الشاشة الرئيسية',headerTitleAlign:'center'}}/>
    <Stack.Screen name='Zoom' component={ZoomScreen} options={{title:'المحاضرات',headerTitleAlign:'center'}}/>
    <Stack.Screen name='SecondForm' component={SecondFormScreen} options={{title:'معلومات اضافية',headerTitleAlign:'center'}}/>
    <Stack.Screen name='Profile' component={ProfileScreen} options={{title:'الملف الشخصي',headerTitleAlign:'center'}}/>
    <Stack.Screen name='LeaderBoard' component={LeaderBoardScreen} options={{title:'لوحة الصدارة',headerTitleAlign:'center'}}/>
    <Stack.Screen name='Malzama' component={MalzmaScreen} options={{title:'ملزمة الذكاء',headerTitleAlign:'center'}}/>
    <Stack.Screen name='StartMeeting' component={StartMeeting} options={{title:'ملزمة الذكاء',headerTitleAlign:'center'}}/>
  </Stack.Navigator>
</NavigationContainer>

  )
}


    

// function Tabsfunction(){

//   return(
//   <NavigationContainer>

// <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Tutors') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }
//             return <FontAwesome5 name="chalkboard-teacher" size={24} color="black" />;
            
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//   <Tab.Screen name={"الرئيسة"} component={HomeScreen} />
//   <Tab.Screen name={"دوراتي"} component={MycoursesScreen} />
//   <Tab.Screen name={"المدرسين"} component={TutorsScreen} />
//   </Tab.Navigator>
//   </NavigationContainer>

//   )}