import React from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const GroupMain = ({navigate, item}) => {
  //TODO: pass user to PatientCart
  const handleClick = () => {
    navigate('Пациент', {
      screen: 'Карта Пациента',
      params: {patient: item.patient}
    })
  }
  return (
         <GroupItem  onPress={handleClick}>
            <Avatar/>
            <View style={{flex: 1}}>
            <FullName>{item.patient.sur_name} {item.patient.name}</FullName>
            <GrayText>{item.diagnosis.name}</GrayText>
            </View>
          <GroupDate active={item.isHealth}>{item.time}</GroupDate>
          </GroupItem>
  );
}

GroupMain.defaultProps = {
  groupTitle: 'Untitled',
  items: [],
}

const GroupDate = styled.Text`
  background:${props => props.active ? '#2a86ff': '#E9F5FF'};
  border-radius: 18px;
  font-weight: 600;
  color: ${props => props.active ? '#fff': '#4294ff'};
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  borderBottomColor: #f3f3f3;
  borderBottomWidth: 2px;
`;

const Avatar = styled.Image`
width: 40px;
height: 40px;
border-radius:50px;
margin-right: 15px;
`;

export default GroupMain;




