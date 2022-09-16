import React from 'react'
import { View } from 'react-native'
import WebView from 'react-native-webview'

export default function MalzmaScreen() {
  return (
    <View  style={{flex: 1,}}>
    <WebView
      style={{height:1500}}
      scalesPageToFit={true}
      bounces={false}
      javaScriptEnabled
      source={{html:'<iframe src="https://quizlet.com/633485287/test/embed?i=3tuf96&x=1jj1" height="500" width="100%" style="border:0"></iframe>'}}
    />
    </View>
    
  )
}