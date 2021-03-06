import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export function CustomButton({onPress, title="Click", style, textStyle}) {
    return (
        <ButtonCustom onPress={onPress} style={style}>
                <TextButton style={textStyle}>{title}</TextButton>
        </ButtonCustom>
    )
}

const ButtonCustom = styled.TouchableOpacity`
    display: flex;
    height: 50px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color:  #2A86FF;
    ${props => props.style}
`;

const TextButton = styled.Text`
    font-size: 16px;
    color: #fff;
    ${props => props.textStyle}
`;