import React, { Component } from 'react';
import './App.css';
import TaskPage from './components/TaskPage';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TaskPage
          tasks={this.props.tasks}
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
