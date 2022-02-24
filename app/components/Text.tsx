import React from 'react';
import styled from 'styled-components/native';

interface TextI {
  text: string
  marginLeft?: number
  marginRight?: number
  fontSize: number
  fontWeight:
    | '200' 
    | '300' 
    | '400' 
    | '500'
    | '600'  
  color: 
    | 'primary' 
    | 'secondary' 
    | 'alert'
    | 'danger'
    | 'dark-text' 
    | 'light-text'
    | 'white'
}

const Text: React.FC<TextI> = ({ 
  text,
  marginLeft,
  marginRight,
  fontSize,
  fontWeight,
  color = 'dark-text', 
}) => {
  let textColor;

  const renderColor = () => {
    switch(color) {
      case 'primary': return '#5C6BC0'
      case 'dark-text': return '#1f1f1f'
      case 'white': return '#fff'
      case 'light-text': return '#757575'
      case 'danger': return '#F44336'
      default: '#1f1f1f'
    }
  };

  const renderfontWeight = () => {
    switch(fontWeight) {
      case '200': return '200'
      case '300': return '300'
      case '400': return '400'
      case '500': return '500'
      case '600': return '600'
      default: '400'
    }
  };
  
  return(
    <Container>
      <Txt 
        style={{ 
          color: renderColor(),
          marginLeft,
          marginRight,
          fontSize,
          fontWeight: renderfontWeight()
        }}>
        {text}
      </Txt>
    </Container>
  )
};

export default Text;

const Container = styled.View``;

const Txt = styled.Text``;