import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from 'react-native-qrcode-svg';

interface MedEntryProps {
	medicationName: string,
	token: string,
	genericName?: string,
	dosage: string,
	count: number
	repeatCount: number,
	repeatAvail?: Date,
}
export default function MedEntry(props: MedEntryProps) {	
	
	const [ qrSize, setQrSize ] = useState<number>(0);
	
	return (
		<View style={styles.container}>
		
			<View style={styles.medInfoWrapper}>
				<Text style={styles.medName}>{props.medicationName} { props.genericName ? `(${props.genericName})` : '' }</Text>
				
				<Text style={styles.medInfo}>{props.dosage} | {props.count} units</Text>
				
				<View style={styles.divider}></View>
				<Text style={styles.repeatCount}>{props.repeatCount} repeats remaining</Text>
				{props.repeatCount && <Text style={styles.repeatAvail}>Not before {props.repeatAvail?.toLocaleDateString()}</Text>}
			</View>
			
			
			{/* todo: qr code */}
			<View style={styles.qrCodeWrapper} onLayout={(x) => x.target.measure((_x,_y,w) => setQrSize(w))}>
				<QRCode value={props.token} size={qrSize} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	'container': {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		padding: 10,
		borderWidth: 1,
		borderColor: 'black',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 5,
		marginBottom: 12
	},
	
	'medInfoWrapper': {
		flex: 1,
		flexDirection: 'column',
		// backgroundColor: 'lime',
	},
	'medName': {
		fontFamily: 'monospace',
		fontSize: 18,
	},
	'medInfo': {
		fontFamily: 'monospace',
	},
	
	'divider': { width: '100%', height: 10 },
	
	'repeatCount': {
		fontFamily: 'monospace'
	},
	
	'repeatAvail': {
		fontFamily: 'monospace',
		marginLeft: 9
	},
	
	'qrCodeWrapper': {
		height: 80,
		width: 80,
		aspectRatio: 1,
		borderWidth: 0,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'cyan'
	},
	
})
