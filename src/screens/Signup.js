import React,{useState, useEffect, useRef} from "react";
import styled from "styled-components/native"
import {Text} from "react-native"
import {Image, Input, Button} from "../components";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {validateEmail, removeWhitespace} from "../utils/common";
import {images} from "../utils/images"
import {Alert} from "react-native";
import {signup} from "../utils/firebase";


const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
background-color:${({ theme })=> theme.background};
padding:40px 20px;
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
    const [photoUrl, setPhotoUrl] = useState(images.person);


    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const didMountRef = useRef();

    useEffect(()=>{
        if(didMountRef.current){
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
    }else{
        didMountRef.current=true;
    }
    },[name, email, password, passwordConfirm]);

    useEffect(()=>{
        setDisabled(!( email && password  && !errorMessage))
    },[email, password,!errorMessage ]);

    const _handleSignupButtonPress = async() =>{
        try{
            const user= await signup({email, password});
            console.log(user);
            Alert.alert("signup success", user.email)
        }catch(e){
            Alert.alert("signup error", e.message)
        }
    };

    return(
        <KeyboardAwareScrollView
            extraScrollHeight={20}
        >
            <Container>
                <Text styled={{fontSize:30}}>signup Screen</Text>
                <Image 
                rounded 
                url={photoUrl} 
                showButton
                onChangeImage={url => setPhotoUrl(url)}
                />
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
                value={password}
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
                onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
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