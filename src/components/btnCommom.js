import React from 'react'
import { View, Button } from 'react-native'

export default BtnCommom = (props) => (
    <View style={{margin: 5, padding: 5}}>
      <Button
          title={props.title}
          onPress={props.function}
      />
    </View>
)