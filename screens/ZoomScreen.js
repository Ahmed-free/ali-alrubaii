import { View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function ZoomScreen() {
  return (
    <WebView
    scalesPageToFit={true}
    bounces={false}
    javaScriptEnabled
    source={{html:'<iframe allow="camera; microphone; fullscreen; display-capture; autoplay" src="https://meet.jit.si/alisdk" style="height: 100%; width: 100%; border: 0px;"></iframe>'}}
    />
  );
}