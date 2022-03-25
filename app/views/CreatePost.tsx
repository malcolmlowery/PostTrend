import React, { useEffect, useState } from 'react';
import { Dimensions, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Text from '../components/Text';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const CreatePostModal = ({ navigation }: any) => {
  const [inputFocused, setInputFocused] = useState(false);
  const returnHeaderPadding = () => {
    switch(screenHeight) {
      case 667: return 0
      case 896: return 20
      default: 0
    }
  };

  return(
    <TouchableWithoutFeedback onPress={() => {
      setInputFocused(false)
      Keyboard.dismiss()
    }}>
      <BlurView tint='light' intensity={100} style={{ flex: 1, marginTop: returnHeaderPadding() }}>
        <ScrollView>
        <Content>
          <Container>
            <Header>
              <TouchableOpacity onPress={() => {
                setInputFocused(false)
                navigation.goBack()
              }}>
                <Text color='primary' fontWeight='600' fontSize={16} text='Cancel' />
              </TouchableOpacity>
            </Header>

            <InputText autoFocus={true} multiline={true} placeholder='Tell your audience something' onFocus={() => setInputFocused(true)} />
            
            <ActionBtns style={{}}>
              <IconBtn>
                <Ionicons name='camera' size={20} color='#3b3b3b' />
                <Text text='Camera' color='#3b3b3b' />
              </IconBtn>
              <IconBtn>
                <Ionicons name='images' size={19} color='#3b3b3b' />
                <Text text='Library' color='#3b3b3b' />
              </IconBtn>
              <IconBtn>
                <Ionicons name='videocam' size={20} color='#F44336' />
                <Text text='Go Live' color='danger' />
              </IconBtn>
            
            </ActionBtns>
          </Container>
        </Content>
        </ScrollView>
        
        <KeyboardAvoidingView enabled={inputFocused} behavior='padding' contentContainerStyle={{ flex: 1 }} keyboardVerticalOffset={returnHeaderPadding()}>      
          <Button onPress={() => {}}>
            <Text color='white' fontWeight='600' fontSize={16} text='Create Post' />
          </Button>
        </KeyboardAvoidingView>
      </BlurView>
    </TouchableWithoutFeedback>
  )
};

export default CreatePostModal;

const Container = styled.View`
  padding: 20px;
  padding-top: 0;
  width: 100%;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  margin-top: 38px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  background: #5C6BC0;
  border-radius: 30px;
  flex-direction: row;
  justify-content: center;
  padding: 20px 30px;
  width: ${screenWidth - 40}px;
  bottom: 60px;
`;

const InputText = styled.TextInput`
  background: #ffffff9b;
  box-shadow: 0 12px 16px rgba(0,0,0,0.075);
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  color: #1f1f1f;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 18px;
  margin-top: 16px;
  max-height: ${screenHeight - 500}px;
  padding: 30px;
`;

const ActionBtns = styled.View`
  align-items: center;
  background: #ffffff9b;
  box-shadow: 0 12px 16px rgba(0,0,0,0.075);
  flex-direction: row;
  height: 70px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  justify-content: space-around;
`;

const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const IconBtn = styled.TouchableOpacity`
  align-items: center;
`;