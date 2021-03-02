import React from "react";
import styled from "styled-components/native"
import {Text} from "react-native"
import { theme } from "../theme";

const Container = styled.View`
flex:1;
justify-content:center;
align-items:center;
background-color:${({ theme })=> theme.background};
`

const Signup =()=>{
    return(
        <Container>
            <Text styled={{fontSize:30}}>signup Screen</Text>
        </Container>
    )
}

export default Signup; 