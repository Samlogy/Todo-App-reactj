import { TodoForm } from '../Organisms'
// import './style.css';

const EditTodo = props => {
    const { data } = props;
    
    return <TodoForm label='Edit Todo' data={data} /> 
}

export default EditTodo;