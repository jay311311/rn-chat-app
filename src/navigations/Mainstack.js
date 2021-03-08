import React from "react"
import {ThemeContext} from "styled-components/native"
import {createStackNavigator, CreateStackNavigator, HeaderTitle} from "@react-navigation/stack"
import {Channel, ChannelCreation} from "../screens"
import { useContext } from "react/cjs/react.development";

const Stack = createStackNavigator();
const MainStack =()=>{
    const theme = useContext(ThemeContext);

    return(
        <Stack.Navigator
            screenOptions={{
                HeaderTitleAlign:"center",
                headerTintColor: theme.headerTintColor,
                cardStyle:{backgroundColor:theme.backgroundColor},
                headerBackTitleVisible:false,
            }}
        >
            <Stack.Screen name="ChannelCreation" component={ChannelCreation}/>
            <Stack.Screen name="Channel"  component={Channel}/>
        </Stack.Navigator>
    )
}

export default MainStack;