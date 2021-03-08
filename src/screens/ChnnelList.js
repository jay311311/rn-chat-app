import React from "react";
import styled from "styled-components/native"
import {Text, Button} from "react-native";

const Container = styled.View`
    flex:1;
    background-color:${({theme})=> theme.backgorund}; 
`

const ChannelList =() =>{
    return(
        <Container>
            <Text style={{fontSize:24}}>ChannelList</Text>
            <Button title="channel Creation(list)" onPress={()=> navigation.navigate("Channel Createion")}/>
        </Container>
    )
}

export default ChannelList;