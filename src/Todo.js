import { useState, useEffect } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs'

import Modal from './Modal';
import './style.css';

const Todo = () => {
    const [todo, setTodo] = useState({ userId: 1, id: 1, title: '', completed: false });
    const [todos, setTodos] = useState({ data: [], loading: false });
    const [label, setLabel] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // close modal (set isModalOpen, true)
    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    useEffect(() => {  getAllTodos() }, []);
    
    // API calls
    const add = e => {
        e.preventDefault();
        const url = '';
        fetch(url, { method: 'POST', body: JSON.stringify(todo)})
        .then(res => res.json())
        .then(json => setTodos({ data: json, loading: false }))
        .catch(error => console.log(error.message));
    };
    const remove = todo => {
        const url = `/postId=${todo.id}`;
        fetch(url, { method: 'DELETE' })
        .then(res => res.json())
        .catch(error => console.log(error.message));
        closeModal();
    };
    const edit = todo => {
        const url = `/postId=${todo.id}`;
        fetch(url, { method: 'PUT', body: JSON.stringify(todo) })
        .then(res => res.json())
        .catch(error => console.log(error.message));
    };
    const getAllTodos = () => {
        setTodos({...todos, loading: true })
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => setTodos({ data: json, loading: false }))
        .catch(error => console.log(error.message));
    };

    // components list
    const addTodo = () => {
        return <div className='add-todo'>
                    <h2>Add Todo</h2>
    
                    <form method="post" onSubmit={e => add(e)}> 
                        <input type="number" name="id" placeholder="ID" 
                            onChange={e => setTodo({...todo, id: e.target.value})} value={todo.id} min="0" />
    
                        <input type="text" name="title" placeholder="Title" 
                            onChange={e => setTodo({...todo, title: e.target.value})} value={todo.title}/>
    
                        {/* <textarea name="text" placeholder="Text ..." 
                            onChange={e => setTodo({...todo, text: e.target.value})} value={todo.text}></textarea> */}
    
                        <button type="submit"> ADD TASK </button>
                    </form>
                </div>
    };
    const editTodo = () => {
        return <div className='add-todo'>
                    <h2> Edit Todo </h2>
    
                    <form method="post" onSubmit={edit}> 
                        <input type="number" name="id" placeholder="ID" 
                            onChange={e => setTodo({...todo, id: e.target.value})} value={todo.id} min="0" />
    
                         <textarea name="text" name="title" placeholder="Title" 
                            onChange={e => setTodo({...todo, title: e.target.value})} value={todo.title}></textarea>
    
                        <button type="submit"> EDIT TASK </button>
                    </form>
                </div>
    };
    const removeTodo = () => {
        return <Modal isModalOpen={isModalOpen} closeModal={closeModal} className='modalStyle'>
                    <div className='modal-header'>
                        <h4 style={{margin: '0'}}> Remove Task </h4>  
                        <GrFormClose style={{cursor: 'pointer'}} size={24} onClick={closeModal} />
                    </div>

                    <hr />

                    <div className='modal-body'>
                        <p> Are you sure that you want to remove this item ? </p>
                    </div>

                    <hr />

                    <div className='modal-footer'>
                        <button className='btn remove' onClick={() => remove(todo)}>
                            Remove
                        </button>
                        <button className='btn' onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </Modal>
    };
    const todoList = () => {
        return  <div className='todo-list'>
                    <h2> Todo List</h2>
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
                            </div>  ) : 'Loading...' }
                    </ul>
                </div>
    };

    // Display Component according to user's choices
    const showCpt = label => {
        switch(label){
            case 'all': return todoList();
            case 'add': return addTodo();
            case 'edit': return editTodo(todo);
        }
    };

    

    
    return (
        <div className="todo-container">
            <ul className='menu'>
                <li onClick={() => setLabel('all')}> All Tasks </li>
                <li onClick={() => setLabel('add')}> Add Task </li>
            </ul>

            <div className='container'>
                { label && label ? showCpt(label) : <p> Loading... </p> }
                { isModalOpen && removeTodo() }
            </div>
        </div>
    )
}

export default Todo;