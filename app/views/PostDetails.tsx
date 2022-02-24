import React from 'react';
import { ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import styled from 'styled-components/native';

import PostCard from '../components/PostCard';
import CommentSection from '../components/CommentSection';

const PostDetails = ({ navigation, route }: any) => {
  const headerHeight = useHeaderHeight();
  const {
    postOwnerUsername,
    postOwnerProfileImage,
    postDescription,
    postImage,
  } = route.params;
  
  return(
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: headerHeight + 10 }}>
        
        <Header>
          <ProfileImage source={{ uri: postOwnerProfileImage }} />
          <HeaderPostInfo>
            <View>
              <Username>{postOwnerUsername}</Username>
              <Username style={{ fontSize: 14, color: '#5C6BC0' }}>53,437 Likes</Username>
            </View>
            <TimestampText>Posted on Sept. 11, 2021</TimestampText>
          </HeaderPostInfo>
        </Header>
        
        <ActionBtns>
          <BookmarkBtn>
            <BtnText>Save Post</BtnText>
          </BookmarkBtn>
        </ActionBtns>

        <Content>
          <PostCard 
            showCardHeader={false}
            navigateToUserProfile={() => navigation.push('UserProfile', {})} 
            postOwnerUsername={postOwnerUsername}
            postOwnerProfileImage={postOwnerProfileImage}
            postDescription={postDescription}
            postImage={postImage}
          />

          <CommentContainer style={{ marginBottom: headerHeight + 50}}>
            <CommentSection likes={19} username='Malani Kia' profileImage='https://images.unsplash.com/photo-1631476541206-64efcea39ca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' comment='translucent (boolean) - Whether the app can draw under the status bar. When true, content will be rendered under the status bar.' />
            <CommentSection profileImage='https://images.unsplash.com/photo-1559750965-99605627de70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' comment='Function which returns a React Element to display on the left side of the header. This replaces the back button. See headerBackVisible to show the back button along side left element.' />
            <CommentSection likes={7} profileImage='https://images.unsplash.com/photo-1631242918552-292249767127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' username='Dennis Walter' comment='Options to render a native search bar on iOS. ' />
            <CommentSection likes={3} username='Kevin Yard' comment='What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.' />
          </CommentContainer>
        </Content>

      </ScrollView>
    </Container>
  )
};

export default PostDetails;

const Container = styled.View`
  flex: 1;
`;

const Content = styled.View``;

const Header = styled.View`
  align-items: center;
  box-shadow: 0 12px 16px rgba(0,0,0,0.075);
  background: #f5f5f5;
  flex-direction: row;
  padding: 0 16px;
  padding-bottom: 6px;
  padding-top: 10px;
  z-index: 999;
`;

const HeaderPostInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const Username = styled.Text`
  color: #1f1f1f;
  font-size: 34px;
  font-weight: 600;
`;

const ProfileImage = styled.Image`
  border-radius: 50px;
  height: 50px;
  margin-top: 3px;
  width: 50px;
`;

const TimestampText = styled.Text`
  color: #818181;
  font-style: italic;
  margin-top: 3px;
`;

const ActionBtns = styled.View`
  background: #f5f5f5;
  padding-bottom: 16px;
  padding-top: 12px;
  z-index: 1999;
`;

const BookmarkBtn = styled.TouchableOpacity`
  align-items: center;
  background: #5C6BC0;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  margin: 0 16px;
  padding: 10px;
`;

const BtnText = styled.Text`
  color: #fff;
  font-weight: 600;
  margin-left: 2px;
`;

const View = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CommentContainer = styled.View``;