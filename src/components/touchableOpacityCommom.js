import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

export default TouchableOpacityCommom = (props) => (
    <View style={props.styles}>
		<TouchableOpacity
			style={{padding: 10, margin: 10}}
			onPress={() => props.function(props.param)}
		>
			<Text style={{fontSize: 22}}>{props.text}</Text>
		</TouchableOpacity>
	</View>
)