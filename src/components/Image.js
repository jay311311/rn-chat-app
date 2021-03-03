import React from "react";
import styled from "styled-components/native";
import PropsTypes from "prop-types";

const Container = styled.View`
    align-self:center;
    margin-bottom: 30px;
`
const StyledImage = styled.Image`
    width:80px;
    height:80px;
`

const Image =({url, imageStyle})=>{
    return(
        <Container>
            <StyledImage source={{uri:url}} style={imageStyle}/>
        </Container>
    )
}

Image.propsTypes={
    uri: PropsTypes.string,
    imageStyle: PropsTypes.object,
}

export default Image;