import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleBar from '@/src/components/titleBar';
import MedEntry from '@/src/components/scripts/medEntry';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function Home() {
	
	return (
		<SafeAreaView style={styles.wrapper}>
			<TitleBar title="Scripts" />
    	<ScrollView style={styles.scrollView}>
     		<MedEntry 
       		medicationName='Lamotragine'
         	token='abcdef'
        	repeatCount={2}
         	repeatAvail={new Date()}
          dosage='10mg'
          count={112}
          />
        <View style={styles.end}></View>
     	</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	'wrapper': { flex: 1, marginBottom: 80 },
	'scrollView': {
		padding: 12,
		// backgroundColor: '#fafafa',
		flex: 1,
	},
	'end': {
		height: 10
	}
});
