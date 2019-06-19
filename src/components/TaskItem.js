import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        var { task, index } = this.props;

        return (
             <tr>
                <td> {index + 1} </td>
                <td className="text-center"> { task.name }  </td>
                <td className="text-center">
                    <span  className = { task.status === true ? 'label label-danger' : 'label label-success' }  >
                            { task.status === true ? 'Kich hoat' : 'An' }
                    </span>
                </td>
                <td className="text-center">
                     <button className="btn btn-warning">
                        <span className="fa fa-pencil mr-5">Sửa</span>
                    </button>
                    &nbsp;
                    <button className="btn btn-danger">
                        <span className="fa fa-trash mr-5">Xóa</span>
                    </button>

             </td>
             </tr>
        );
    }
}
export default TaskItem;
