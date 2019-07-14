import React from "react";
import { View, TextInput } from "react-native";
import BtnCommom from "./btnCommom";
import { connect } from "react-redux";
import { updateItem } from "./../actions/actionsItem";
import { updateItemList } from "./../actions/actionItemList"
import { updateIsEditing } from "./../actions/actionIsEditing"

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerTextInput = text => {
    let item = {
      id: this.props.item.id !== "" ? this.props.item.id : "",
      value: text
    };

    this.props.onUpdateItem(item);
  };

  addItemToList = () => {
    if (this.props.item.value.trim() === "") {
      return;
    }
    
    if (this.props.item.id === "") {
      let newId = this.props.itemList.length + 1;
      
      while (!this.checkId(newId)) {
        newId++;
      }
      
      let newItem = { id: String(newId), value: this.props.item.value.trim() };
      
      this.props.onUpdateItemList([...this.props.itemList, newItem])
      this.props.onUpdateItem({id: '', value: ''})

    } else {
      let alterArray = this.props.itemList;

      alterArray.forEach(item =>
        item.id === this.props.item.id
          ? (item.value = this.props.item.value.trim())
          : null
      );

      this.props.onUpdateItemList([...alterArray])
      this.props.onUpdateIsEditing(false)
      this.props.onUpdateItem({id: '', value: ''})
    }
  };

  checkId(id) {
    let finded = true;

    this.props.itemList.forEach(item => {
      if (item.id == id) {
        finded = false;
      }
    });

    return finded;
  }

  cancelEdit = () => {
    this.props.onUpdateItem({id: '', value: ''})
    this.props.onUpdateIsEditing(false)
  };

  render() {
    return (
      <View>
        <TextInput
          style={{ borderWidth: 1, margin: 10, padding: 5, borderRadius: 50 }}
          value={this.props.item.value}
          onChangeText={this.handlerTextInput}
        />
        <BtnCommom
          title="Salvar"
          function={this.addItemToList}
        />
        {this.props.isEditing && (
          <BtnCommom
            title="Cancelar edição"
            function={this.cancelEdit}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  item: state.ReducersItem,
  isEditing: state.ReducersIsEditing,
  itemList: state.ReducersItemList
});

const mapDispachToProps = dispach => ({
  onUpdateItem: item => {
    dispach(updateItem(item));
  },
  onUpdateItemList: itemList => {
    dispach(updateItemList(itemList))
  },
  onUpdateIsEditing: bool => {
    dispach(updateIsEditing(bool))
  }
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
