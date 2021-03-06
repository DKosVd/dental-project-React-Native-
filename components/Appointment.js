import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5, Entypo, Foundation } from '@expo/vector-icons'
import styled from 'styled-components/native';

export function Appointment({tooth, diagnosis, price, time }) {
    return (
        <Action>
        <LineWithDescription>
            <IconsWithText>
                <FontAwesome5 name="tooth" size={16} color="grey" />
                <Description>Зуб:<DescriptionBold>{tooth}</DescriptionBold></Description>
            </IconsWithText>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="grey" />
            </TouchableOpacity>
        </LineWithDescription>
        <LineWithDescription>
            <IconsWithText>
                <Foundation name="clipboard-notes" size={24} color="grey" />
                <Description>Диагноз:<DescriptionBold>{diagnosis}</DescriptionBold></Description>
            </IconsWithText>
        </LineWithDescription>
        <ButtonWithIcon>
            <DateOrPrice style={{
                backgroundColor:  '#2A86FF'
            }}>
                <TextForDate>{time}</TextForDate>
            </DateOrPrice>
            <DateOrPrice style={{
                backgroundColor: '#90EE90'
            }}>
                <TextForPrice>{price} Р</TextForPrice> 
            </DateOrPrice>
        </ButtonWithIcon>
    </Action>
    )
}


const Action = styled.View`
    background-color: #fff;
    border-radius: 10px;
    margin: 10px 0px;
    padding: 0px 5px 0px 10px;
`

const ButtonWithIcon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0px 20px 0px;
`

const TextForDate = styled.Text`
    color: #fff;
    width: 150px;
    text-align: center;
    font-weight: bold;
`


const DateOrPrice = styled.TouchableOpacity`
    display: flex;
    height: 35px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

const TextForPrice = styled.Text`
    text-align: center;
    color: green;
    width: 100px;
    font-weight: bold;
`

const LineWithDescription = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

const IconsWithText = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;    
    padding: 3px;
`


const Description = styled.Text`
    margin: 0px 0px 0px 10px;
    font-size: 16px;
`

const DescriptionBold = styled.Text`
    font-weight: bold;
`