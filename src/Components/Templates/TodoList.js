import { TodoForm } from '../Organisms'
// import './style.css';

const TodoList = props => {
    const { data } = props;
    
    return <TodoForm label='Todo List' data={data}> </TodoForm> 
}

export default TodoList;

{/* <div className='todo-list'>
                    <h2> Todo List</h2>

                    { searchTodo() }
                    { ( Array.isArray(searchOp.result) && searchOp.result.length > 0 ) && 
                            <span>Suggestions: {searchOp.result.length} </span> }

                    <ul>
                        {!todos.loading && 
                            <div className='item-labels'>
                                <span> user id </span>
                                <span> id </span>
                                <span> title </span>
                                <span> completed </span>
                                <span> Actions </span>
                            </div> }
                        
                        { Array.isArray(todos.data) && todos.data.length > 0 ? todos.data.map( (todo, index) =>
                            <div className='item-data' key={index}>
                                <li> {todo.userId} </li>
                                <li> {todo.id} </li>
                                <li> {todo.title} </li>
                                <li> {todo.completed} </li>

                                <div className='group-btn'>
                                    <BsPencilSquare onClick={() => {setTodo(todo);setLabel('edit')}} className='icon' />
                                    <BsTrashFill onClick={() => { setTodo(todo);openModal();}} className='icon' />
                                </div>
                            </div>  ) :  Spinner() }
                    </ul>
                </div> */}