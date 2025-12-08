import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleBar from '@/src/components/titleBar';

export default function Settings() {
	return (
		<SafeAreaView>
			<TitleBar title="Settings" />
			<Text>
				Settings
			</Text>
		</SafeAreaView>
	)
}
