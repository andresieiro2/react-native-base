import React, { Component } from 'react';
import { List, Spinner} from 'native-base';
import { connect } from 'react-redux';
import * as listActions from './../../store/list/actions';
import * as listSelectors from './../../store/list/selectors';
import ListItem from './item';

class ListTodo extends Component {

  componentDidMount(newProps){
    this.props.getTodos();
  }

  render() {
    return (
      <List style={{marginLeft: -15}} >
      {
         this.props.list ? (
           this.props.list.map( (listItem, index) =>
            <ListItem text={listItem.title} icon="file-code-o" key={index} />
           )
        ) :
        (
         <Spinner color="blue" />
        )
      }
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: listSelectors.getTodosList(state),
  };
}


const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => {
      dispatch( listActions.getTodosList() );
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
