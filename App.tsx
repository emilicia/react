import Navigation from '@/navigation';
import theme from '@/utils/theme';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import "react-native-gesture-handler"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (

    <GestureHandlerRootView
     style={{
      flex: 1,
     }}>
      
    <NavigationContainer>
      <ThemeProvider theme={theme}>
   

      <Navigation/>
      </ThemeProvider>
    </NavigationContainer>
    </GestureHandlerRootView>
      
    
  );
}
