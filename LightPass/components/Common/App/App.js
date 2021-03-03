import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from '../Routes';
import SnackBarContainer from '../../../containers/Common/SnackBarContainer';
import BottomNavigationContainer from '../../../containers/Common/BottomNavigationContainer';
import { DefaultReactNativePaperTheme } from '../../../common/theme';

// an abstraction for having some components on all the screens
export default function App() {
  return (
    <PaperProvider theme={DefaultReactNativePaperTheme}>
      <View style={{ flex: 1 }}>
        <Routes />
        <BottomNavigationContainer />
        <SnackBarContainer />
      </View>
    </PaperProvider>
  );
}
