import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <ScrollView>
          <Text testID="welcome">Welcome</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
