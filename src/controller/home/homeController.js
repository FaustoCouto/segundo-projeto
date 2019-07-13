import React from 'react'
import { Text, View, TextInput, FlatList, Button, TouchableOpacity } from 'react-native'

export default class HomeController extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        item: {
          id: '',
          value: ''
        },
        itemList: [],
        isEditing: false
    }
  }

  handlerTextInput = (text) => {
    this.setState({
        item: {
          id: this.state.item.id !== '' ? this.state.item.id : '',
          value: text
        }
    })
  }

  checkId(id) {

    let finded = true

    this.state.itemList.forEach((item) => {
      if(item.id == id){
        finded = false
      }
    })

    return finded
  }

  addItemToList = () => {

    if (this.state.item.value.trim() === '') {
      return
    }

    if (this.state.item.id === '') {

      let newId = this.state.itemList.length + 1

      while(!this.checkId(newId)){
        newId++
      }

      let newItem = { id: String(newId), value: this.state.item.value.trim()}

      this.setState({
          itemList: [...this.state.itemList, newItem],
          item: {
            id: '',
            value: ''
          }
      })
    } else {
      let alterArray = this.state.itemList

      alterArray.forEach((item) => item.id === this.state.item.id ? item.value = this.state.item.value.trim() : null)

      this.setState({
        itemList: [...alterArray],
        item: {
          id: '',
          value: ''
        },
        isEditing: false
      })
    }
  }

  deleteItem(item) {

    let arrayToRemoveItem = [...this.state.itemList]
    let index = arrayToRemoveItem.indexOf(item)

    arrayToRemoveItem.splice(index, 1)

    this.setState({
      itemList: arrayToRemoveItem
    })
  }

  cancelEdit = () => {
    this.setState({
      item: {
        id: '',
        value: ''
      },
      isEditing: false
    })
  }

  handlerEditItem(Id) {
      this.setState({
        item: {
          id: Id,
          value: this.state.itemList.find((item) => item.id === Id).value
        },
        isEditing: true
    })
  }

  itemListaDeCompras = ({item}) => (
    <View key={item.id} style={{flexDirection: 'row'}}>
      <View style={{width: "75%", justifyContent: 'center'}}>
        <TouchableOpacity
          style={{padding: 10, margin: 10}}
          onPress={() => this.handlerEditItem(item.id)}
        >
          <Text style={{fontSize: 22}}>{item.value}</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: "25%", justifyContent: 'center'}}>
        <TouchableOpacity 
          style={{padding: 10, margin: 10}}
          onPress={() => this.deleteItem(item)}>
          <Text>delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  render() {
    return (
      <View>
          <TextInput
              style={{borderWidth: 1, margin: 10, padding: 5, borderRadius: 50}}
              value={this.state.item.value}
              onChangeText={this.handlerTextInput}
          />
          <View style={{margin: 5, padding: 5}}>
            <Button
                title={'Inserir'}
                onPress={this.addItemToList}
            />
          </View>
          {
            this.state.isEditing &&
            <View style={{padding: 5}}>
              <Button
                title={'Cancelar edição'}
                onPress={this.cancelEdit}
            />
            </View>
          }
          <FlatList
            ItemSeparatorComponent={() => <View style={{width: "90%", borderBottomWidth: 1, borderColor: 'grey', backgroundColor: 'red'}} />}
            keyExtractor={(item, index) => item.id}
            data={this.state.itemList}
            renderItem={this.itemListaDeCompras}
          />
      </View>
    )
  }
}