import React from 'react';
import TapList from './TapList';
import TapDetails from './TapDetails';
import NewTapForm from './NewTapForm';
import EditTapForm from './EditTapForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions'

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // formVisisbleOnPage: false,
      // masterTapList: [],
      selectedTap: null,
      editing: false,
    };
  }

  handleSellingPint = () => {
    const selectedTap = this.state.selectedTap
    const newSelectedTap = Object.assign({}, selectedTap, { pints: selectedTap.pints - 1 })
    const editMasterTapList = this.state.masterTapList.filter(tap => tap.id !== this.state.selectedTap.id).concat(newSelectedTap);
    if (selectedTap.pints > 1) {

      this.setState({
        masterTapList: editMasterTapList,
        selectedTap: newSelectedTap,
        editing: false
      });
    } else if (selectedTap.pints === 1) {
      const selectedTap = this.state.selectedTap
      const outOfPints = Object.assign({}, selectedTap, { pints: selectedTap.pints - 1, status: selectedTap.status = "OUT OF STOCK" });
      const editMasterTapList = this.state.masterTapList.filter(tap => tap.id !== this.state.selectedTap.id).concat(outOfPints);

      this.setState({
        masterTapList: editMasterTapList,
        selectedTap: outOfPints,
        editing: false
      })
    }
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        selectedTap: null,
        editing: false,
      })
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  // handleAddingNewTapToList = (newTap) => {
  //   const newMasterTapList = this.state.masterTapList.concat(newTap);

  //   this.setState({
  //     masterTapList: newMasterTapList,
  //     formVisisbleOnPage: false
  //   });
  // }

  handleAddingNewTapToList = (newTap) => {
    const { dispatch } = this.props;
    const action = a.addTap(newTap);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  // handleEditingTapInList = (tapToEdit) => {
  //   const editMasterTapList = this.state.masterTapList.filter(tap => tap.id !== this.state.selectedTap.id).concat(tapToEdit);

  //   this.setState({
  //     masterTapList: editMasterTapList,
  //     editing: false,
  //     selectedTap: null
  //   });
  // }

  handleEditingTapInList = (tapToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTap(tapToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTap: null
    })
  }

  // handleDeletingTap = (id) => {
  //   const newMasterTapList = this.state.masterTapList.filter(tap => tap.id !== id);

  //   this.setState({
  //     masterTapList: newMasterTapList,
  //     selectedTap: null
  //   });
  // }

  handleDeletingTap = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTap(id);
    dispatch(action);
    this.setState({ selectedTap: null })
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.masterTapList[id];

    this.setState({
      selectedTap: selectedTap
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditTapForm
        tap={this.state.selectedTap}
        onEditTap={this.handleEditingTapInList} />;
      buttonText = "Reaturn To Tap List";
    } else if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetails
        tap={this.state.selectedTap}
        onClickingEdit={this.handleEditClick}
        onClickingDelete={this.handleDeletingTap}
        handleSellingPint={this.handleSellingPint} />;
      buttonText = "Return To Tap List";
    } else if (this.props.formVisisbleOnPage) {
      currentlyVisibleState = <NewTapForm
        onNewTapCreation={this.handleAddingNewTapToList} />;
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList
        tapList={this.props.masterTapList}
        onTapSelection={this.handleChangingSelectedTap} />;
      buttonText = "Add New Tap"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-primary mt-3 btn-custom" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

TapRoomControl.propTypes = {
  masterTapList: PropTypes.object,
  formVisisbleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterTapList: state.masterTapList,
    formVisisbleOnPage: state.formVisisbleOnPage
  }
}

TapRoomControl = connect(mapStateToProps)(TapRoomControl);

export default TapRoomControl;