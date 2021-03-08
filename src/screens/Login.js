import React,{ useState, useRef, useEffect,useContext } from "react"
import {ProgressContext} from "../contexts"
import styled from "styled-components/native"
import {Text} from "react-native";
import {Image, Input, Button} from "../components"
import {images} from "../utils/images"
import {TouchableWithoutFeedback, Keyboard} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {validateEmail, removeWhitespace} from "../utils/common"
import {useSafeAreaInsets} from "react-native-safe-area-context"
import {Alert} from "react-native";
import {login} from "../utils/firebase";

const Container = styled.View`
flex :1;
justify-content:center;
align-items:center;
background-color:${({theme}) => theme.background};
padding: 0 20px;
padding-top: ${({ insets:{top}}) =>top}px;
padding-bottom: ${({ insets:{bottom}}) =>bottom}px;
`;

const ErrorText = styled.Text`
    align-items:center;
    width:100%;
    height:20px;
    margin-bottom:10px;
    line-height:20px;
    color:${({ theme })=> theme.errorText};
`

const Login  = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [disabled, setDisabled] = useState(true)
    const passwordRef = useRef();
    const {spinner} = useContext(ProgressContext)
    const insets= useSafeAreaInsets();

    useEffect(()=>{
        setDisabled(!(email && password && !errorMessage))
    }, [email, password, errorMessage])

    const _handleEmailChange = email =>{
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(validateEmail(changedEmail) ? "" : "PLEASE VERIFY YOUR EMAIL")
    }

    const _handlePasswordChange = password =>{
        setPassword(removeWhitespace(password))
    }

    const _handleLoginButtonPress = async() =>{
        try{
            spinner.start();
            const user= await login({email, password});
            Alert.alert("login success", user.email)
        }catch(e){
            Alert.alert("login Error", e.message)
        }finally{
            spinner.stop();
        }

    };
    
    return(
        <KeyboardAwareScrollView  
            contentContainerStyle={{flex:1}}
            extraScrollHeight={20}    
        >
        <Container insets={insets}>
            <Text>Login Screen</Text>
            <Image url={images.logo} imageStyle={{borderRadius:8, width:100, height:100}}/>
            <Input
                label="Email"
                value={email}
                onChangeText={_handleEmailChange}
                onSubmitEditing={()=>passwordRef.current.focus()}
                placeholder="Email"
                returnKeyType="next"
            />
            <Input
                label="Password"
                ref={passwordRef}
                value={password}
                onChangeText={_handlePasswordChange}
                onSubmitEditing={ _handleLoginButtonPress}
                placeholder="Password"
                returnKeyType="done"
                isPassword
            />
            <ErrorText>{errorMessage}</ErrorText>
            <Button title="LOG IN" onPress ={_handleLoginButtonPress} disabled={disabled}/>
            <Button title="SIGH UP WITH EMAIL" onPress ={()=> navigation.navigate("Signup")} isFilled={false}/>
        </Container>
        </KeyboardAwareScrollView>
    )
}
export default Login; 