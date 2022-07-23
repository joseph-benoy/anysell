import React from 'react';
import { BaseLayout } from './app/core/Layouts';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import RootNavigator from './Navigators/root';


const theme = {
    ...DefaultTheme,
    roundness: 4,
    version: 3,
    colors: {
      ...DefaultTheme.colors,
      primary: '#F24C4C',
      secondary: '#293462',
      tertiary: '#293462'
    },
  };
  

export default function App() {
  return (
    <PaperProvider theme={theme}>
        <BaseLayout>
            <RootNavigator/>
        </BaseLayout>
    </PaperProvider>
  );
}

