import React from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text testID="welcome">Welcome</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
