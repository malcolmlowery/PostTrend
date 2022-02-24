import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/views/Home';
import PostDetails from './app/views/PostDetails';
import UserProfile from './app/views/UserProfile';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import CreatePostModal from './app/views/CreatePost';
import { TouchableOpacity } from 'react-native';
import Text from './app/components/Text';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(true);

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Home' 
          screenOptions={{ 
            headerShown: false,
            headerBackTitleStyle: {
              fontSize: 19
            }
         }}
        >
          <Stack.Screen 
            name='Home' 
            component={Home}
          />
          <Stack.Screen 
            name='PostDetails' 
            component={PostDetails}
            options={{ 
              headerShown: true,
              headerTransparent: true,
              headerBlurEffect: 'prominent',
              title: '',
              headerBackTitle: 'Newsfeed',
              headerTintColor: '#5C6BC0',
            }}
          />
          <Stack.Screen 
            name='UserProfile' 
            component={UserProfile}
          />
          <Stack.Screen 
            name='BlankView' 
            component={CreatePostModal}
            options={{
              presentation: 'transparentModal',
              contentStyle: { backgroundColor: 'transparent' },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

export default App;