import React from 'react';
import {View, Text} from 'react-native';
import StatusBarPage from '../../components/StatusBarPage';

export default function Home(){
    return(
        <View>
            <StatusBarPage
                barStyle="ligth-content"
                backgroundColor="#132742"
            />
            <Text>
                Pagina Links
            </Text>
        </View>
    )
}