import { View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function LeaderBoardScreen() {
  return (
    <WebView
    scalesPageToFit={true}
    bounces={false}
    javaScriptEnabled
    source={{html:'<iframe id="iframe-jlkggjngpgr" style="width: 120%; transform: scale(2.2);margin-top:1000;margin-left:140; border: none; height: 100%; " src="https://keepthescore.co/embed/jlkggjngpgr/"></iframe>'}}
    />
  );
}