import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import Newsfeed from './Newsfeed';
import BlankView from './BlankView';
import Text from '../components/Text';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const tabConfig = ({ route }: any): any => ({
  headerShown: true,
  headerTransparent: true,
  headerBackground: () => <BlurView tint='light' intensity={100} style={{ flex: 1 }} />,
  tabBarStyle: { position: 'absolute' },
  tabBarBackground: () => <BlurView tint='light' intensity={100} style={{ flex: 1 }} />,
  tabBarActiveTintColor: '#5C6BC0',
  tabBarInactiveTintColor: '#b4b4b4',
  tabBarShowLabel: false,
  tabBarIcon: ({ focused, _ , size }: any) => {
    let iconName: any;
    
    if(route.name === 'Newsfeed') {
      iconName = 'newspaper'
    }
    if(route.name === 'Messages') {
      iconName = 'mail'
    }
    if(route.name === 'Notifications') {
      iconName = 'notifications'
    }
    if(route.name === 'Settings') {
      iconName = 'ios-settings-sharp'
    }

    return <Ionicons name={iconName} size={28} color={focused ? '#5C6BC0' : '#b4b4b4'} />
  },
});

const Home = ({ navigation }: any) => {
  return(
    <Tab.Navigator initialRouteName='Home' screenOptions={tabConfig}>
      <Tab.Screen 
        name='Newsfeed' 
        component={Newsfeed} 
        options={{
          title: 'PostTrend',
          headerTintColor: '#5C6BC0',
          headerRight: () => {
            return(
              <TouchableOpacity onPress={() => navigation.push('BlankView')}>
                <Ionicons name='create' color='#222222' size={38} style={{ top: -2, right: 10 }} />
              </TouchableOpacity>
            )
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <ProfileImg source={{ uri: 'https://scontent.ffxe1-1.fna.fbcdn.net/v/t1.6435-9/193756614_2974180042866009_8866198955069470639_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5417EOy_ymEAX9TTJMQ&_nc_oc=AQl594tehvdX2MBRzdGeyU1rhoAALhzmZaTWL1p563XE4sx-wurDqopYrRfWQZpgEBA&_nc_ht=scontent.ffxe1-1.fna&oh=123e4bf1bfd2461df1a620c76392da8b&oe=61645041' }} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name='Messages' component={BlankView} options={{ headerShown: true }} />
      <Tab.Screen name='Notifications' component={BlankView} options={{ headerShown: true }} />
      <Tab.Screen name='Settings' component={BlankView} options={{ headerShown: true }} />
    </Tab.Navigator>
  )
};

export default Home;

const HeaderActionBtns = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin-right: 4px;
  top: -4px;
  width: 100px;
`;

const ProfileImg = styled.Image`
  border-radius: 18px;
  height: 34px;
  margin-left: 16px;
  top: -1px;
  width: 34px;
`;