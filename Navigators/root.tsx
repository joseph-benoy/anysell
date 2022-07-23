import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Auth';

const RootNavigator = ()=>{
    return(
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
    );
}

export default RootNavigator;