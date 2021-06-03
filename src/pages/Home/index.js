import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import {Feather} from '@expo/vector-icons';
import { ContainerLogo, Logo, ContainerContent, Title, Subtitle,
ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText} from './style';

export default function Home(){
    return(
        <LinearGradient
            colors={['#1ddbb9','#132742']}
            style={{flex:1, justifyContent:'center'}}
        >
            <StatusBarPage
                barStyle="ligth-content"
                backgroundColor="#1ddbb9"
            />
            
            <Menu/>

            <ContainerLogo>
                <Logo source={require('../../assets/Logo.png')} resizeMode="contain"/>
            </ContainerLogo>

            <ContainerContent>
                <Title>SujeitoLink</Title>
                <Subtitle>Cole seu link para encurtar</Subtitle>
            
                <ContainerInput>
                    <BoxIcon>
                        <Feather name="link" size={22} color="#fff" />
                    </BoxIcon>
                    <Input
                        placeholder="Cole seu link aqui..."
                        placeholderTextColor="#fff"
                    />
                </ContainerInput>

                <ButtonLink>
                    <ButtonLinkText>Gerar Link</ButtonLinkText>
                </ButtonLink>

            </ContainerContent>


        </LinearGradient>
    )
}