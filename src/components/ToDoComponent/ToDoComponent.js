import { useState } from "react"
import ToDoElementComponent from '../ToDoElement/ToDoElementComponent';

import { connect } from "react-redux";

function ToDoComponent(props) {


    console.log(props);
    const [toDos, setToDos] = useState([]);
    const [curTask, setCurTask] = useState('');

    const handleAddToDo = () => {
        props.addTodo(curTask);
    }

    const deleteTodo = (task) => {
        let temp = [...toDos];
        const index = temp.findIndex((element) =>
            element === task
        );
        temp.splice(index, 1);
        setToDos(temp);
    }

    return (
        <div>
            <input type="text" onChange={(event) => {
                setCurTask(event.target.value);
            }}></input>
            <button onClick={handleAddToDo}>Add ToDo</button>
            {
                props.toDos.map((curTask, index) => {
                    return (
                        <ToDoElementComponent key={index} task={curTask} deleteTodo={deleteTodo}></ToDoElementComponent>
                    )
                })
            }
        </div>)
}

const mapStateToProps = (state) => {
    return {
        toDos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (task) => {
            dispatch({
                type: 'ADD_TODO',
                payLoad: task
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoComponent)