import React from "react";
import sylted from "styled-components/native"
import {Text} from "react-native";
const Containter = styled.View`
    flex:1;
    background-color:${({theme})=> theme.background};
`

const Profile = () =>{
    return(
        <Container>
            <Text style={{fontSize:24}}>PROFILE</Text>
        </Container>
    )
}

export default Profile;