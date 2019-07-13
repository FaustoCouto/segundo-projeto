import React from 'react'
import Header from '../../components/header'
import ContainerList from '../../components/containerList'

export default class HomeController extends React.Component{
  constructor(props){
		super(props)

		this.state = {
      itemList: [],
      // item: {
      //   id: '',
      //   value: ''
      // },
      isEditing: false
		}
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
  
  checkId(id) {

    let finded = true

    this.state.itemList.forEach((item) => {
      if(item.id == id){
        finded = false
      }
    })

    return finded
  }
  
  handlerEditItem = (Id) => {
    this.setState({
        item: {
          id: Id,
          value: this.state.itemList.find((item) => item.id === Id).value
        },
        isEditing: true
    })
  }
  
  deleteItem = (item) => {
    let arrayToRemoveItem = [...this.state.itemList]
    let index = arrayToRemoveItem.indexOf(item)
  
    arrayToRemoveItem.splice(index, 1)
  
    this.setState({
      itemList: arrayToRemoveItem
    })
  }

  render() {
    return (
      <>
        <Header
          // state={this.state}
          functions={{
            "addItemToList": this.addItemToList,
            "alterArray": this.alterArray,
            "handlerTextInput": this.handlerTextInput,
            "cancelEdit": this.cancelEdit
          }}
        />
        <ContainerList
          state={this.state}
          functions={{
            "handlerEditItem": this.handlerEditItem,
            "deleteItem": this.deleteItem
          }}
        />
      </>
    )
  }
}