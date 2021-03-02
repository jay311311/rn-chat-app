import React from "react"
import styled from "styled-components/native"
import {Text,Button} from "react-native";

const Container = styled.View`
flex :1;
justify-content:center;
align-items:center;
background-color:${({theme}) => theme.background};
`;

const Login  = ({navigation}) => {
    return(
        <Container>
            <Text>Login Screen</Text>
            <Button title="SIGN-UP" onPress ={()=> navigation.navigate("Signup")}></Button>
        </Container>
    )
}
export default Login; 