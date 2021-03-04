import React,{useState, useEffect, useRef} from "react";
import styled from "styled-components/native"
import {Text} from "react-native"
import {Image, Input, Button} from "../components";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {validateEmail, removeWhitespace} from "../utils/common";


const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
background-color:${({ theme })=> theme.background};
padding:0 20px;
`

const ErrorText = styled.Text`
align-items:center;
width:100%;
height:20px;
margin-bottom:10px;
line-height:20px;
color:${({ theme })=> theme.errorText};
`

const Signup =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [disabled, setDisabled] = useState(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    useEffect(()=>{
        let _errorMessage = "";
        if(!name){
            _errorMessage = "PLEASE ENTER YOUR NAME"
        }else if(!validateEmail(email)){
            _errorMessage = "PLEASE VERIFY YOUR EMAIL"
        }else if(password.length < 6){
            _errorMessage = "the password must contain 6 characters at least"
        }else if(password !== passwordConfirm){
            _errorMessage = "PASSWORD NEED TO MATCH"
        }else{
            _errorMessage = "";
        } 
        setErrorMessage(_errorMessage);
    },[name, email, password, passwordConfirm]);

    useEffect(()=>{
        setDisabled(!(name && email && password && passwordConfirm && !errorMessage))
    },[name, email, password, passwordConfirm]);

    const _handleSignupButtonPress = () =>{};

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex : 1}}
            extraScrollHeight={20}
        >
            <Container>
                <Text styled={{fontSize:30}}>signup Screen</Text>
                <Image rounded />
                <Input
                label="Name"
                value={name}
                onChangeText={text=> setName(text)}
                onSubmitEditing ={()=>{
                    setName(name.trim());
                    emailRef.current.focus()
                }}
                onBlur={()=>setName(name.trim())}
                placeholder="name"
                returnkeyType="next"
                />
                <Input
                ref={emailRef}
                label="Email"
                value={email}
                onChangeText={text =>setEmail(removeWhitespace(text))}
                onSubmitEditing={()=> passwordRef.current.focus}
                placeholder="email"
                returnkeyType="next"
                />
                <Input
                ref={passwordRef}
                label="PASSWORD"
                value={email}
                onChangeText={text => setPassword(removeWhitespace(text))}
                onSubmitEditing={()=> passwordConfirmRef.current.focus()}
                placeholder="password"
                returnkeyType="done"
                isPassword
                />
                <Input
                ref={passwordConfirmRef}
                label="Passwod Confirm"
                value={passwordConfirm}
                onChngeText={text => setPasswordConfirm(removeWhitespace(text))}
                onSubmitEditing={_handleSignupButtonPress}
                placeholder="password"
                retutnKeyType="done"
                isPassword
                />
                <ErrorText>{errorMessage}</ErrorText>
                <Button
                title="SIGN-UP"
                onPress={_handleSignupButtonPress}
                disabled={disabled}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Signup; 