import React from 'react';
import TapList from './TapList';
import TapDetails from './TapDetails';

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisisbleOnPage: false,
      masterTapList: [],
      selectedTap: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisisbleOnPage: false,
        selectedTap: null,
        editing: false
      })
    } else {
      this.setState(prevState => ({ formVisisbleOnPage: !prevState.formVisisbleOnPage }));
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);

    this.setState({
      masterTapList: newMasterTapList,
      formVisisbleOnPage: flase
    });
  }

  handleEditingTapInList = (tapToEdit) => {
    const editMasterTapList = this.state.masterTapList.filter(tap => TapList.id !== this.state.selectedTap.id).concat(tapToEdit);

    this.setState({
      masterTapList: editMasterTapList,
      editing: false,
      selectedTap: null
    });
  }

  handleDeletingTap = (id) => {
    const newMasterTapList = this.state.masterTapList.filter(tap => tap.id !== id);

    this.setState({
      masterTapList: newMasterTapList,
      selectedTap: null
    });
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.masterTapList.filter(tap => tap.id === id)[0];

    this.setState({
      selectedTap: selectedTap
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditTicketForm
        ticket={this.state.selectedTap}
        onEditTap={this.handleEditingTapInList} />;
      buttonText = "Reaturn To Tap List";
    } else if (this.state.selectedTap != null) {
      currentlyVisibleState = <TicketDetail
        ticket={this.state.selectedTap}
        onClickingEdit={this.handleEditClick}
        onClickingDelete={this.handleDeletingTap} />;
      buttonText = "Return To Tap List";
    } else if (this.state.formVisisbleOnPage) {
      currentlyVisibleState = <NewTicketForm
        onNewTapCreation={this.handleAddingNewTapToList} />;
      buttonText = "Add New Tap";
    }
  }
}