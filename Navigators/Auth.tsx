import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SignUp } from '../screens';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = ()=>{
    return(
        <AuthStack.Navigator screenOptions={{
            headerShown:false
        }}>
            <AuthStack.Screen name='Login' component={Login}/>
            <AuthStack.Screen name='Sign Up' component={SignUp}/>
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;