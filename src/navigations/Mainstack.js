import React from "react"
import {ThemeContext} from "styled-components/native"
import {createStackNavigator} from "@react-navigation/stack"
import {Channel, ChannelCreation} from "../screens"
import { useContext } from "react/cjs/react.development";
import MainTab from "./MainTab"

const Stack = createStackNavigator();
const MainStack =()=>{
    const theme = useContext(ThemeContext);

    return(
        <Stack.Navigator
        initialRouteName="Main"
            screenOptions={{
                HeaderTitleAlign:"center",
                headerTintColor: theme.headerTintColor,
                cardStyle:{backgroundColor:theme.backgroundColor},
                headerBackTitleVisible:false,
            }}
        >
            <Stack.Screen name="Main" component={MainTab}/>
            <Stack.Screen name="ChannelCreation" component={ChannelCreation}/>
            <Stack.Screen name="Channel"  component={Channel}/>
        </Stack.Navigator>
    )
}

export default MainStack;