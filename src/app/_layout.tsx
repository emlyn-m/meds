import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

import { NativeTabs, Label, Icon, VectorIcon } from 'expo-router/unstable-native-tabs';
import { Platform } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      
      <NativeTabs>
	      <NativeTabs.Trigger name="index">
	        <Label>Home</Label>
	        {Platform.select({
	          ios: <Icon sf="pills.fill" />,
	          android: <Icon src={<VectorIcon family={MaterialIcons} name="medication" />} />,
	        })}
				</NativeTabs.Trigger>
		    <NativeTabs.Trigger name="settings">
		      <Label>Settings</Label>
		      {Platform.select({
		        ios: <Icon sf="gearshape.fill" />,
		        android: <Icon src={<VectorIcon family={MaterialIcons} name="settings" />} />,
		      })}
			</NativeTabs.Trigger>

      </NativeTabs>
    	
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
