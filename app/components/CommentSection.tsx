import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

export interface CommentSectionI {
  navigateToUserProfile: () => void
  username: string
  profileImage: string
  comment: string
  likes: number
}

const CommentSection: React.FC<CommentSectionI> = ({
  navigateToUserProfile,
  username = 'Daisha Lowery',
  profileImage = 'https://images.unsplash.com/photo-1631129079259-2da505e45946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  comment = 'Test',
  likes,
}) => {
  return(
    <Container>
      <CardCommentSection>
        <CardCommentHeader>
          <ProfileImg source={{ uri: profileImage }} />
          <Username style={{ fontSize: 13, marginLeft: 0 }}>{username}</Username>
          <Spacer />
          { likes && <LikesText>{likes} Likes</LikesText> }
        </CardCommentHeader>
        <UserInfo>
          <CardCommentDescription>
            {comment}
          </CardCommentDescription>
          <View>
            <LikeBtn>
              <Text style={{ fontWeight: '600', fontSize: 13 }}>Like</Text>
            </LikeBtn>
            <TimestampText style={{ fontWeight: '500', fontSize: 13 }}>5m</TimestampText>
          </View>
        </UserInfo>
      </CardCommentSection>
      {/* <Divider /> */}
    </Container>
  )
};

export default CommentSection;

const Container = styled.View`
`;

const CardCommentSection = styled.View`
  background: #f8f8f8; 
  box-shadow: 0 12px 16px rgba(0,0,0,0.075);
  border-radius: 16px;
  margin: 8px 10px;
`;

const UserInfo = styled.View`
  padding: 16px;
  padding-top: 10px;
`;

const CardCommentHeader = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: 14px;
  padding: 16px 0;
  padding-bottom: 0;
`;

const CardCommentDescription = styled.Text`
  align-items: center;
  color: #181818;
  flex-direction: row;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 18px;
`;

const ProfileImg = styled.Image`
  border-radius: 18px;
  height: 36px;
  width: 36px;
  margin-right: 10px;
`;

const Username = styled.Text`
  font-weight: 500;
  font-size: 15px;
`;

const Divider = styled.View`
  background: #e9e9e9;
  flex: 1;
  height: 1px;
  margin: 0 10px;
`;

const TimestampText = styled.Text`
  color: #818181;
  font-weight: 500;
  font-size: 11px;
`;

const LikesText = styled.Text`
  color: #5C6BC0;
  font-weight: 600;
  font-size: 12px;
  margin: 0 14px;
`;

const LikeBtn = styled.TouchableOpacity`
  color: #5C6BC0;
  font-weight: 600;
  margin-left: 1px;
`;

const View = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const Text = styled.Text`
  color: #8a95d3;
  font-size: 12px;
`;

const Spacer = styled.View`
  flex: 1;
`;