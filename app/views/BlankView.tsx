import React from 'react';
import styled from 'styled-components/native';

const BlankView = ({ route, navigation }: any) => {
  return(
    <Container>
    </Container>
  )
};

export default BlankView;

const Container = styled.View`
  background: #ececec;
  flex: 1;
`;