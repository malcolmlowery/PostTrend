import React, { useEffect, useState } from 'react';
import { Dimensions, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Text from '../components/Text';

const CreatePostModal = ({ navigation }: any) => {
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').width;
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
        
        <Content>
          <Container>
            <Header>
              <TouchableOpacity onPress={() => {
                setInputFocused(false)
                navigation.goBack()
              }}>
                <Text color='primary' fontWeight='600' fontSize={16} text='Cancel' />
              </TouchableOpacity>
              <Button onPress={() => {}}>
                <Text color='white' fontWeight='600' fontSize={16} text='Post' />
              </Button>
            </Header>

            <InputText autoFocus={true} multiline={true} placeholder='Tell your audience something' onFocus={() => setInputFocused(true)} />
          </Container>
        </Content>
        
        <KeyboardAvoidingView enabled={inputFocused} behavior='padding' contentContainerStyle={{ flex: 1 }} keyboardVerticalOffset={returnHeaderPadding()}>
          
            <ActionBtns style={{ bottom: 60}}>
              <IconBtn>
                <Ionicons name='camera' size={32} color='#5C6BC0' />
                <Text text='Camera' color='primary' />
              </IconBtn>
              <IconBtn>
                <Ionicons name='images' size={32} color='#5C6BC0' />
                <Text text='Library' color='primary' />
              </IconBtn>
              <IconBtn>
                <Ionicons name='videocam' size={32} color='#F44336' />
                <Text text='Go Live' color='danger' />
              </IconBtn>
            </ActionBtns>
          
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
  background: #5C6BC0;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  padding: 10px 30px;
`;

const InputText = styled.TextInput`
  background: #ffffff9b;
  box-shadow: 0 12px 16px rgba(0,0,0,0.075);
  border-radius: 16px;
  color: #1f1f1f;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 18px;
  margin-top: 16px;
  max-height: 200px;
  padding: 16px;
`;

const ActionBtns = styled.View`
  align-items: center;
  background: #ffffff9b;
  box-shadow: 0 12px 16px rgba(0,0,0,0.075);
  flex-direction: row;
  height: 70px;
  margin: 0 32px;
  border-radius: 35px;
  justify-content: space-around;
`;

const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const IconBtn = styled.TouchableOpacity`
  align-items: center;
`;