import React from "react"
import { View, FlatList } from "react-native"
import TouchableOpacityCommom from './touchableOpacityCommom'

export default class ContainerList extends React.Component{
	constructor(props){
		super(props)
	}

	itemListaDeCompras = ({item}) => (
		<View key={item.id} style={{flexDirection: 'row'}}>
			<TouchableOpacityCommom
				styles={{
					width: "75%",
					justifyContent: 'center'
				}}
				text={item.value}
				param={item.id}
				function={this.props.functions.handlerEditItem}
			/>

			<TouchableOpacityCommom
				styles={{
					width: "75%", justifyContent: 'center'
				}}
				text="remover"
				param={item}
				function={this.props.functions.deleteItem}
			/>
		</View>
	)

	render(){
		return(
			<View>
          <FlatList
            ItemSeparatorComponent={() => <View style={{width: "90%", borderBottomWidth: 1, borderColor: 'grey', backgroundColor: 'red'}} />}
            keyExtractor={(item, index) => item.id}
            data={this.props.state.itemList}
						renderItem={this.itemListaDeCompras}
          />
      </View>
		)
	}
}