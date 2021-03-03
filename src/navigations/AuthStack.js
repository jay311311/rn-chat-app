import React, { useContext } from "react"
import {ThemeContext} from "styled-components/native"
import {createStackNavigator} from "@react-navigation/stack"
import {Login, Signup} from "../screens"


const Stack = createStackNavigator();

const AuthStack = ()=>{
    const theme = useContext(ThemeContext);
    return(
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign:"center",
                cardStyle:{backgroundColor:theme.backgroundColor},
                headerTintColor:theme.headerTintColor,
            }}
            >
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{headerShown:false}} //헤더 감추기
            />
            <Stack.Screen 
                name="Signup" 
                component={Signup}
                options={{headerBackTitleVisible:false}} //뒤로가기버튼의 타이틀(제목) 지우기
            />
        </Stack.Navigator>
    )
}

export default AuthStack;