import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import styled from 'styled-components/native';
import PostCard from '../components/PostCard';

const postsData = [
  {
    postId: 2,
    postOwnerUid: 'fh43893497gfh9gfh9',
    postOwnerUsername: 'Kevin Davie',
    postOwnerProfileImage: 'https://images.unsplash.com/photo-1631400315986-2091c2050d27?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    postDescription: 'At $3.8 billion, One World Trade Center is the most expensive skyscraper ever built in the U.S. The entire WTC complex hasn’t made a profit since the building opened seven years ago.',
    postImage: 'https://images.unsplash.com/photo-1628746250479-05d4ebcc1c32?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Sjl5clBhSFhSUVl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    postId: 1,
    postOwnerUid: '4782ryf813f831t23',
    postOwnerUsername: 'Tim Cook',
    postOwnerProfileImage: 'data:image/jpeg;base64,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',
    postDescription: '20 years ago, we were irrevocably changed. We’ll never forget those we lost or the heroic efforts of first responders and everyday Americans on that terrible day. Nor will we forget the sacrifices of those who were called to service in the months and years that followed.',
    postImage: 'https://cdn.idropnews.com/wp-content/uploads/2021/06/10102006/MacBook-Pro-Concept-14-inch-or-16-inch.jpg',
  },
  {
    postId: 3,
    postOwnerUid: '543fh20v2323rh3ife',
    postOwnerUsername: 'Malcolm Lowery',
    postOwnerProfileImage: 'https://scontent.ffxe1-1.fna.fbcdn.net/v/t1.6435-9/193756614_2974180042866009_8866198955069470639_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5417EOy_ymEAX9TTJMQ&_nc_oc=AQl594tehvdX2MBRzdGeyU1rhoAALhzmZaTWL1p563XE4sx-wurDqopYrRfWQZpgEBA&_nc_ht=scontent.ffxe1-1.fna&oh=123e4bf1bfd2461df1a620c76392da8b&oe=61645041',
    postDescription: 'At $3.8 billion, One World Trade Center is the most expensive skyscraper ever built in the U.S. The entire WTC complex hasn’t made a profit since the building opened seven years ago.',
    postImage: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    postId: 4,
    postOwnerUid: 'gy28893fsafh83883f',
    postOwnerUsername: 'Carl Wilson',
    postOwnerProfileImage: 'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    postDescription: 'What keeps you breathing?'
  },
];


const Newsfeed = ({ navigation }: any) => {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  return(
    <Container style={{ marginTop: headerHeight + 10, marginBottom: tabBarHeight }}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={postsData}
        keyExtractor={({ postId }: any): any => postId.toString()}
        renderItem={({ item }: any): any => {
          return(
            <PostCard 
              navigateToUserProfile={() => navigation.push('UserProfile', {})} 
              navigateToPostDetails={() => navigation.push('PostDetails', {
                postOwnerUsername: item.postOwnerUsername,
                postOwnerProfileImage: item.postOwnerProfileImage,
                postDescription: item.postDescription,
                postImage: item.postImage,
              })} 
              postOwnerUsername={item.postOwnerUsername}
              postOwnerProfileImage={item.postOwnerProfileImage}
              postDescription={item.postDescription}
              postImage={item.postImage}
              postCommentUserProfileImage='https://images.unsplash.com/photo-1631129079259-2da505e45946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              postCommentUsername='David Wayne'
              postComment='I just want the new Macbook Pro. Please hurry up October!'
            />
          )
        }}
      />
    </Container>
  )
};

export default Newsfeed;

const Container = styled.View`
  margin-top: 10px;
  overflow: visible;
`;

const FlatList = styled.FlatList`
  /* margin-bottom: 150px; */
  overflow: visible;
`;
