import * as React from 'react';
import { Platform, StyleSheet,SafeAreaView,StatusBar, ScrollView } from 'react-native';

export interface IBaseLayoutProps {
    children:React.ReactNode
}

export  function BaseLayout (props: IBaseLayoutProps) {
  return (
    <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0
    }
})