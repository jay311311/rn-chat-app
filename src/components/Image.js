import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
    align-self:center;
    margin-bottom: 30px;
`
const StyledImage = styled.Image`
background-color:#f8f8f8;
    width:80px;
    height:80px;
    border-radius:${({ rounded }) =>(rounded? 50 : 0)}px;
`

const Image =({url, imageStyle, rounded})=>{
    return(
        <Container>
            <StyledImage source={{uri:url}} style={imageStyle} rounded={rounded}/>
        </Container>
    )
}

Image.defaultProps = {
    rounded:false,
}

Image.propTypes={
    uri: PropTypes.string,
    imageStyle: PropTypes.object,
    rounded: PropTypes.bool,
}

export default Image;