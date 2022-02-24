import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export interface PostCardI {
  navigateToUserProfile: () => void
  navigateToPostDetails?: () => void
  postOwnerUsername: string
  postImage?: string
  postOwnerProfileImage: string
  postDescription?: string
  postLikeTotal?: number
  postCommentTotal?: number
  postCommentUsername?: string
  postCommentUserProfileImage?: string
  postComment?: string
  showCardHeader?: boolean
}

const PostCard: React.FC<PostCardI> = ({
  navigateToUserProfile, 
  navigateToPostDetails,
  postOwnerUsername,
  postOwnerProfileImage,
  postImage,
  postDescription,
  postLikeTotal = 0,
  postCommentTotal = 0,
  postCommentUsername,
  postCommentUserProfileImage,
  postComment,
  showCardHeader = true,
}) => {
  return(
    <Container>
      { showCardHeader &&
        <CardHeader>
          <TouchableOpacity onPress={navigateToUserProfile} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ProfileImg source={{ uri: postOwnerProfileImage }} />
            <Username>{postOwnerUsername}</Username>
          </TouchableOpacity>
          <Spacer>
            <TouchableOpacity style={{ flex: 1 }} onPress={navigateToPostDetails} />
          </Spacer>
          <HeaderLikeText>{postLikeTotal} Likes</HeaderLikeText>
        </CardHeader>
      }

      { postDescription &&
        <TouchableWithoutFeedback onPress={navigateToPostDetails}>
          <CardDescription style={{ paddingTop: showCardHeader === true ? 12 : 0 }}>
            {postDescription}
          </CardDescription>
        </TouchableWithoutFeedback>
      }
      
      { postImage && 
        <ImageContainer>
          <HelpActionsBtn>
            <Ionicons name='help-circle' size={22} color='#fff' />
          </HelpActionsBtn>
          <CardImg source={{ uri: postImage }} /> 
        </ImageContainer>
      }
      
      <CardActionButtons>
        <TouchableWithoutFeedback onPress={navigateToPostDetails}>
          <CommentTotalText>{postCommentTotal} Comments</CommentTotalText>
        </TouchableWithoutFeedback>
        <Spacer />
        <LikeBtn>
          <Text>Like</Text>
        </LikeBtn>
      </CardActionButtons>

      <Divider />

      { postComment &&
        <TouchableWithoutFeedback onPress={navigateToPostDetails}>
          <CardCommentSection>
            <CardCommentHeader>
              <ProfileImg style={{ height: 24, width: 24, marginRight: 10 }} source={{ uri: postCommentUserProfileImage }} />
            </CardCommentHeader>
            <CommentSection>
              <Username style={{ fontSize: 13, marginLeft: 0 }}>{postCommentUsername}</Username>
              <CardCommentDescription>
                {postComment}
              </CardCommentDescription>
            </CommentSection>
          </CardCommentSection>
        </TouchableWithoutFeedback>
      }
    </Container>
  )
};

export default PostCard;

const Container = styled.View`
  background: #f5f5f5;
  box-shadow: 0 12px 16px rgba(0,0,0,0.075);
  /* border-radius: 6px; */
  margin-bottom: 8px;
  width: 100%;
`;

const CardHeader = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 16px;
  padding-top: 18px;
  padding-bottom: 0px;
`;

const ProfileImg = styled.Image`
  border-radius: 18px;
  height: 36px;
  width: 36px;
`;

const Username = styled.Text`
  font-weight: 500;
  margin-left: 10px;
`;

const Spacer = styled.View`
  flex: 1;
`;

const HeaderLikeText = styled.Text`
  color: #5C6BC0;
  font-weight: 600;
  font-size: 14px;
  margin-right: 2px;
`;

const CardDescription = styled.Text`
  color: #1f1f1f;
  font-size: 15px;
  letter-spacing: 0.1px;
  line-height: 18px;
  padding: 0 16px;
`;

const ImageContainer = styled.View``;

const CardImg = styled.Image`
  height: 300px;
  margin-top: 20px;
`;

const HelpActionsBtn = styled.TouchableOpacity`
  border-radius: 20px;
  margin-right: 8px;
  opacity: 0.80;
  position: absolute;
  right: 0px;
  top: 26px;
  z-index: 999;
`;

const CardActionButtons = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 10px 16px;
`;

const CommentTotalText = styled.Text`
  color: #7c7c7c;
  font-weight: 500;
  font-size: 13px;
`;

const LikeBtn = styled.TouchableOpacity`
  align-items: center;
  background: #5C6BC0;
  border-radius: 8px;
  color: white;
  padding: 8px 0;
  width: 80px;
`;

const CardCommentSection = styled.View`
  flex-direction: row;
  padding: 10px 16px;
`;

const CommentSection = styled.View``;

const CardCommentHeader = styled.View`
  align-items: center;
  flex-direction: row;
`;

const CardCommentDescription = styled.Text`
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  margin: 2px 0;
`;

const Divider = styled.View`
  background: #f1f1f1;
  flex: 1;
  height: 1px;
`;

const Text = styled.Text`
  color: white;
`;