import React, { Component } from 'react';
import './App.css';
import TaskPage from './components/TaskPage';
import { connect } from 'react-redux';

class App extends Component {

//Adding an action handler
  onCreateTask = ({title, description}) => {
    this.props.dispatch({
      type: 'CREATE_TASK',
      payload: {
        title,
        description
      }
    });
  };

  render() {
    // console.log('props from App: ', this.props)
    return (
      <div className="main-content">
        <TaskPage
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
         />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
