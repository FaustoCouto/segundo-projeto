import React from "react";
import { View, TextInput } from "react-native";
import BtnCommom from "./btnCommom";
import { connect } from "react-redux";
import updateItem from "./../actions/actionsItem";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerTextInput = text => {
    let item = {
      id: this.state.item.id !== "" ? this.state.item.id : "",
      value: text
    };

    this.props.onUpdateItem(item);
  };

  render() {
    return (
      <View>
        <TextInput
          style={{ borderWidth: 1, margin: 10, padding: 5, borderRadius: 50 }}
          value={this.props.state.item.value}
          onChangeText={this.handlerTextInput}
        />
        <BtnCommom
          title="Salvar"
          function={this.props.functions.addItemToList}
        />
        {this.props.state.isEditing && (
          <BtnCommom
            title="Cancelar edição"
            function={this.props.functions.cancelEdit}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

const mapDispatchToProps = dispach => ({
  onUpdateItem: (item) => {
    dispach(() => updateItem(item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
