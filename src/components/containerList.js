import React from "react";
import { View, FlatList } from "react-native";
import TouchableOpacityCommom from "./touchableOpacityCommom";
import { connect } from "react-redux";
import { updateItem } from "./../actions/actionsItem";
import { updateIsEditing } from "./../actions/actionIsEditing";
import { updateItemList } from "./../actions/actionItemList";
import { Ionicons } from "@expo/vector-icons";

export class ContainerList extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerEditItem = Id => {
    this.props.onUpdateItem({
      id: Id,
      value: this.props.itemList.find(item => item.id === Id).value
    });

    this.props.onUpdateIsEditing(true);
  };

  deleteItem = item => {
    let arrayToRemoveItem = [...this.props.itemList];
    let index = arrayToRemoveItem.indexOf(item);

    arrayToRemoveItem.splice(index, 1);

    this.props.onUpdateItemList(arrayToRemoveItem);
  };

  itemListaDeCompras = ({ item }) => (
    <View key={item.id} style={{ flexDirection: "row" }}>
      <TouchableOpacityCommom
        styles={{
          width: "85%",
          justifyContent: "center"
        }}
        text={item.value}
        param={item.id}
        function={this.handlerEditItem}
      />

      <TouchableOpacityCommom
        styles={{
          width: "15%",
					justifyContent: "center"
        }}
        icon={<Ionicons name="md-trash" size={26} color="red" />}
        param={item}
        function={this.deleteItem}
      />
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "90%",
                borderBottomWidth: 1,
                borderColor: "grey",
                backgroundColor: "red"
              }}
            />
          )}
          keyExtractor={(item, index) => item.id}
          data={this.props.itemList}
          renderItem={this.itemListaDeCompras}
        />
      </View>
    );
  }
}

const mapStateToPros = state => ({
  itemList: state.ReducersItemList,
  isEditing: state.ReducersIsEditing
});

const mapDispachToProps = dispach => ({
  onUpdateItem: item => {
    dispach(updateItem(item));
  },
  onUpdateIsEditing: bool => {
    dispach(updateIsEditing(bool));
  },
  onUpdateItemList: itemList => {
    dispach(updateItemList(itemList));
  }
});

export default connect(
  mapStateToPros,
  mapDispachToProps
)(ContainerList);
