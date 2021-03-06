import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { CustomButton } from '../components/CustomButton';
import { axios } from '../core/axios.js';
import { MaterialIcons } from '@expo/vector-icons'
import { Appointment } from '../components/Appointment';
import { allTooths } from '../utils/allTooths';

export function Patientscreen({navigation, route }) {
    const { patient } = route.params;
    const [data, setData] = React.useState([]);
    const [tooths, setTooths] = React.useState({});
    React.useEffect(() => {
        async function getPaintmentById(id) {
            const { data } = await axios.get(`/appointment/${id}`)
            setData(data.data)
            setTooths(allTooths(data.data))
        }
        getPaintmentById(patient._id)
    }, [])

    const handleClick = () => {
        navigation.navigate('Формула зубов', {
            tooths: tooths.tooth
        })
    }
    return (
        <InfoAboutPatientAndAction>
            <TitlePatient>{patient.sur_name} {patient.name}</TitlePatient>
            <NumberPatient>{patient.phone}</NumberPatient>
            <ButtonWithIcon>
                <CustomButton title="Формула зубов" style={{
                    flexBasis: 250
                }} onPress={handleClick}/>
                <PhoneButton>
                    <MaterialIcons name="call" size={32} color="white" />
                </PhoneButton>
            </ButtonWithIcon>

            <Actions>
                <ActionsText>Приемы</ActionsText>
                <View>
                    <ScrollView>
                        {data.map(appointment => <Appointment
                            key={appointment._id}
                            tooth={appointment.tooth}
                            diagnosis={appointment.diagnosis.name}
                            price={appointment.diagnosis.price}
                            time={appointment.time} />)}
                    </ScrollView>
                </View>
            </Actions>

        </InfoAboutPatientAndAction>
    )
}


const Actions = styled.View`
    display: flex;
    flex-direction: column;
`
const ActionsText = styled.Text`
    font-size: 20px;
    margin: 0px 0px 10px 0px;
    font-weight: bold;
`

const TitlePatient = styled.Text`
    font-size: 24px;
    font-weight: bold;
`
const NumberPatient = styled.Text`
    font-size: 14px;
    color: grey;
    margin: 5px 0px 0px 0px;
`

const InfoAboutPatientAndAction = styled.View`
    padding: 25px;
`

const ButtonWithIcon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0px 20px 0px;
`

const PhoneButton = styled.TouchableOpacity`
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    background-color: #3CB371;
`
