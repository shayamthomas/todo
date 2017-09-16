import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'

import All from './all';
import Completed from './completed';
import Pending from './pending';
import AddTask from './addTask';

const panes = [
  { menuItem: 'All', render: () => <Tab.Pane attached={false}><All /></Tab.Pane> },
  { menuItem: 'Pending', render: () => <Tab.Pane attached={false}><Pending /></Tab.Pane> },
  { menuItem: 'Completed', render: () => <Tab.Pane attached={false}><Completed /></Tab.Pane> },
]

class Todo extends Component {
    render() {
        return (
            <div className="container">
                <div className="page_content">
                    <div className="page-header">
                        <h4>Todo List</h4>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8 add_task">
                            <AddTask />
                        </div>
                        <div className="col-xs-offset-2 col-xs-8">
                            <Tab menu={{ secondary: true }} panes={panes} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;
