import { connect } from "react-redux";

function ToDoElementComponent(props) {

    return (
        <div>
            <p>{props.task}</p>
            <button onClick={() => {
                props.deleteToDoAction(props.task);
            }}>Done</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteToDoAction: (task) => {
            dispatch({
                type: 'DELETE_TODO',
                payLoad: task
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoElementComponent)

