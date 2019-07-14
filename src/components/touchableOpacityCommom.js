import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

export default TouchableOpacityCommom = (props) => (
    <View style={props.styles}>
		<TouchableOpacity
			style={{padding: 10, margin: 5}}
			onPress={() => props.function(props.param)}
		>
			{props.text ? <Text style={{fontSize: 16}}>{props.text}</Text> : props.icon}
		</TouchableOpacity>
	</View>
)