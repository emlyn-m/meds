import { StyleSheet, Text, View } from "react-native";

interface TitleBarProps { title: string }
export default function TitleBar(props: TitleBarProps) {
	
	return (
		<View style={styles.bar}>
			<Text style={styles.text}>{props.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	'bar': {
		justifyContent: 'center',
		paddingHorizontal: 18,
		paddingBottom: 18,
		// borderBottomWidth: 1,
		marginBottom: 10,
   	boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
	},
	'text': {
		fontSize: 24,
		fontFamily: 'monospace',
		fontWeight: 'bold'
	}
})
