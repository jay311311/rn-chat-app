import React,{ useState, useRef } from "react"
import styled from "styled-components/native"
import {Text,Button} from "react-native";
import {Image, Input} from "../components"
import {images} from "../utils/images"
import {TouchableWithoutFeedback, Keyboard} from "react-native";


const Container = styled.View`
flex :1;
justify-content:center;
align-items:center;
background-color:${({theme}) => theme.background};
padding:20px;
`;

const Login  = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwordRef = useRef()


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Text>Login Screen</Text>
            <Image url={images.logo} imageStyle={{borderRadius:8, width:100, height:100}}/>
            <Input
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                onSubmitEditing={()=>passwordRef.current.focus()}
                placeholder="Email"
                returnKeyType="next"
            />
            <Input
                label="Password"
                ref={passwordRef}
                value={password}
                onChangeText={text => setPassword(text)}
                onSubmitEditing={()=>{}}
                placeholder="Password"
                returnKeyType="done"
                isPassword
            />
            <Button title="SIGN-UP" onPress ={()=> navigation.navigate("Signup")}></Button>
        </Container>
        </TouchableWithoutFeedback>
    )
}
export default Login; 