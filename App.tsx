import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableFreeze } from 'react-native-screens';
import FlashcardsListScreen from './src/components/FlashcardScreen';
import AddFlashcardScreen from './src/components/AddFlashCardScreen';
import QuizScreen from './src/components/QuizScreen';

enableFreeze(true);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlashcardsList">
        <Stack.Screen name="FlashcardsList" component={FlashcardsListScreen} />
        <Stack.Screen name="AddFlashcard" component={AddFlashcardScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}