import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from "./Settings";
import Home from "./Home";

const DashboardDrawer = createDrawerNavigator();

export const Dashboard:React.FC = ()=>{
    return(
        <DashboardDrawer.Navigator>
            <DashboardDrawer.Screen name="Home" component={Home}/>
            <DashboardDrawer.Screen name="Settings" component={Settings}/>
        </DashboardDrawer.Navigator>
    );
}