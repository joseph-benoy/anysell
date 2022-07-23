import * as React from 'react';
import {  Text,StyleSheet, View, ScrollView} from 'react-native';
import { Button, Checkbox, useTheme } from 'react-native-paper';
import { PrimaryButton } from '../app/components/Button';
import { OutlinedInput } from '../app/components/Form';

export interface ISignUpProps {
}


export  function SignUp (props: any) {
    const [checked,setPasswordView] = React.useState<boolean>(false);
    const togglePassword = ()=>{
        setPasswordView(!checked);
    }
    const theme = useTheme();
    const goToSignIn = ()=>{
        props.navigation.navigate('Login');
    }
  return (
    <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1,flexDirection:'column',justifyContent:'center'}}>
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.SignUpForm}>
                    <Text style={styles.title}>AnySell</Text>
                    <OutlinedInput placeholder='Full name'/>
                    <OutlinedInput placeholder='Email' textContentType='emailAddress' keyboardType='email-address'/>
                    <OutlinedInput placeholder='Password' secureTextEntry={!checked} />
                    <OutlinedInput placeholder='Confirm password' secureTextEntry={!checked} />
                    <View style={styles.passwordToggleWrap}>
                        <Checkbox color={theme.colors.primary} status={checked?'checked':'unchecked'} onPress={togglePassword}/>
                        <Text onPress={togglePassword}>Show password</Text>
                    </View>
                    <View style={styles.SignUpBtnWrap}>
                        <PrimaryButton >Sign Up</PrimaryButton>
                    </View>
                </View>
                <View style={styles.signUpWrap}>
                    <Text>Already an user?</Text>
                    <Button compact onPress={goToSignIn}>Sign In</Button>
                </View>
            </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  appBar:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"white" ,
    elevation:0 
  },
  title:{
    color:'#F24C4C',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  formContainer:{
    flex:0.3,
    justifyContent:"center",
    alignItems:"center"
  },
  SignUpForm:{
    flex:0.3,
    height:"100%",
    width:"100%",
    paddingHorizontal:25,
    justifyContent:'space-around'
  },
  passwordToggleWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:"center",
    marginVertical:-10
  },
  signUpWrap:{
    flex:0.1,
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
  },
  SignUpBtnWrap:{
    paddingHorizontal:10
  }
})