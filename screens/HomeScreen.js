import React from 'react'
import { SectionList, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import GroupMain from '../components/Group'
import GroupTitle from '../components/GroupTitle'
import { Ionicons } from '@expo/vector-icons';
import { axios } from '../core/axios.js'



//TODO: по дате сформировать пользователей и сделать правильный генератор данных(т.е. по дате сколько пользователей )
export function Homescreen({navigation}) {
    const [data, setData] = React.useState(null);
    const opt = {
      month: 'long',
      weekday: 'long',
      day: 'numeric',
      year: 'numeric'
    }
    React.useEffect(() => {
      async function getAppointments() {
        const { data } = await axios.get(`/appointment`);
        setData(data.data)
      }
      getAppointments();
    }, []) 
    return (
            <Container >
                {data && <SectionList
                    sections={data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => <GroupMain navigate  = {navigation.navigate} item = {item} />}
                    renderSectionHeader={({ section:  { title } }) => (
                        <GroupTitle>{(new Date(title)).toLocaleString("ru", opt)}</GroupTitle>
                    )}
                />}
                <PlusButton style={{
                    shadowColor: "#2A86FF",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 18,
                }}>
                    <Ionicons name="ios-add" size={36} color="white" />
                </PlusButton>
            </Container>
    )
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  position: absolute;
  right: 15px;
  bottom: 20px;
`;

const Container = styled.View`
  flex:1;
  margin-top: 30px;
  padding: 0 20px;
`;