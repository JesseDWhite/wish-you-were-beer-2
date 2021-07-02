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

  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({
      masterTapList: newMasterTapList,
      formVisisbleOnPage: flase
    });
  }
}