import { useState, useEffect } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { BsTrashFill, BsPencilSquare } from 'react-icons/bs'

import Modal from './Modal';
import './style.css';

const Todo = () => {
    const [todo, setTodo] = useState({ userId: 1, id: 1, title: '', completed: false }); // single todo
    const [todos, setTodos] = useState({ data: [], loading: false }); // all todos
    const [label, setLabel] = useState('all'); // label for Cpt
    const [isModalOpen, setIsModalOpen] = useState(false); // modal box
    const [searchOp, setSearchOp] = useState({ text: '', result: [] }); // search Feature

    // close modal (set isModalOpen, true)
    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    // exclude column list from filter "Search"
    const excludeColumns = ['title'];

    useEffect(() => {  getAllTodos(10) }, []); // set limit (nbr max of items to render)

    const clearForm = () => setTodo({ userId: '', id: '', title: '', completed: '' });

    const AddFeature = label => {
        clearForm(); setLabel(label);
    };

    // API calls
    const add = e => {
        e.preventDefault();

        const url = '';
        fetch(url, { method: 'POST', body: JSON.stringify(todo)})
        .then(res => res.json())
        .then(res => setTodos({ data: res, loading: false }))
        .catch(err => console.log(err.mesage));
    };
    const remove = todo => {
        const url = `/postId=${todo.id}`;

        fetch(url, { method: 'DELETE' })
        .then(res => res.json())
        .then(res => setTodos({ data: res, loading: false }))
        .catch(err => console.log(err.mesage));

        closeModal();
    };
    const edit = (e, todo) => {
        e.preventDefault();

        const url = `/postId=${todo.id}`;
        fetch(url, { method: 'PUT', body: JSON.stringify(todo) })
        .then(res => res.json())
        .then(res => setTodos({ data: res, loading: false }))
        .catch(err => console.log(err.mesage));
    };
    const getAllTodos = limit => {
        setTodos({...todos, loading: true })
        const url ='https://jsonplaceholder.typicode.com/todos';
        fetch(url)
        .then(res => res.json())
        .then(res => setTodos({ data: res, loading: false }))
        .catch(err => console.log(err.mesage));
    };

    // Search Feature
    const handleSearch = value => {
        setSearchOp({...searchOp, text: value });
        filterData(value);
    };
    const filterData = value => {
        const lowercasedValue = value.toLowerCase().trim();
        // if (lowercasedValue === "") return 'todos.data';
        // if (lowercasedValue !== "") {
        //         const filteredData = todos.data.filter(item => 
        //             item.toString().toLowerCase().includes(lowercasedValue) )
        //     setSearchOp({...searchOp, result: filteredData });
        // }
    };
    // return Object.keys(item).some(key =>
    //     excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)

    // components list
    const addTodo = () => {
        return <div className='add-todo'>
                    <h2>Add Todo</h2>
    
                    <form method="post" onSubmit={e => add(e)}> 
                        <div className='form-input'>
                            <label htmlFor='id'> ID </label>
                            <input type="number" name="id" placeholder="ID" id='id'
                                onChange={e => setTodo({...todo, id: e.target.value})} value={todo.id} min="0" />
                        </div>

                        <div className='form-input'>
                            <label htmlFor='title'> Title  </label>
                            <input type="text" name="title" placeholder="Title" id='title'
                                onChange={e => setTodo({...todo, title: e.target.value})} value={todo.title}/>
                        </div>
                        
                        <div className='form-input'>
                            <label> Completed </label>

                            <div className='completed'>
                                <div>
                                    <label> Yes </label> 
                                    <input type="checkbox" name="completed" id='completed_yes'
                                        onChange={e => setTodo({...todo, completed: e.target.value})} value={todo.completed} />
                                </div>

                                <div>
                                    <label> No </label>    
                                    <input type="checkbox" name="completed" id='completed_no'
                                        onChange={e => setTodo({...todo, completed: e.target.value})} value={todo.completed} />
                                </div>
                            </div>
                        </div>
    
                        <button type="submit"> ADD TASK </button>
                    </form>
                </div>
    };
    const editTodo = () => {
        return <div className='add-todo'>
                    <h2> Edit Todo </h2>
    
                    <form method="post" onSubmit={edit}> 
                        <div className='form-input'>
                            <label htmlFor='id'> ID </label>
                            <input type="number" name="id" placeholder="ID" id='id'
                                onChange={e => setTodo({...todo, id: e.target.value})} value={todo.id} min="0" />
                        </div>

                        <div className='form-input'>
                            <label htmlFor='title'> Title  </label>
                            <input type="text" name="title" placeholder="Title" id='title'
                                onChange={e => setTodo({...todo, title: e.target.value})} value={todo.title}/>
                        </div>
                        
                        <div className='form-input'>
                            <label> Completed </label>

                            <div className='completed'>
                                <div>
                                    <label> Yes </label> 
                                    <input type="checkbox" name="completed" id='completed_yes'
                                        onChange={e => setTodo({...todo, completed: e.target.value})} value={todo.completed} />
                                </div>

                                <div>
                                    <label> No </label>    
                                    <input type="checkbox" name="completed" id='completed_no' checked={todo.completed}
                                        onChange={e => setTodo({...todo, completed: e.target.value})} value={todo.completed} />
                                </div>
                            </div>
                        </div>
    
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
                    
                    { searchTodo() }
                    { (Array.isArray(searchOp.result) && searchOp.result.length > 0) && <span>Suggestions: {searchOp.result.length} </span> }

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
                </div>
    };
    const searchTodo = () => {
        return  <div className='search-todo'>
                    <span> Search: </span> 
                    <input type="text" placeholder="Type to search..." value={searchOp.text} 
                            onChange={e => handleSearch(e.target.value)} />
                </div>
    };
    const Spinner = () => {
        return  <div className="loading">
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
    };

    // Infinite Scroll
    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        // console.log( { scrollTop, scrollHeight, clientHeight });
        if(clientHeight + scrollTop >= scrollHeight - 5) beforeFetching(); // show the loading animation
    });

    const beforeFetching = () => {
        console.log('Before Fetch !')
        setTodos({...todos, loading: true }); // show spinner before loading data
        setTimeout(moreTodos, 1000); // load more data
        console.log('more Todos !')
    };
    
    const moreTodos = async () => {
        // show spinner, load data & set it in state
        const url ='https://jsonplaceholder.typicode.com/todos';
        fetch(url)
        .then(res => res.json())
        .then(res => {setTodos({ data: res, loading: false }); console.log('Fetching !')})
        .catch(err => console.log(err.mesage));
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
                <li onClick={() => { AddFeature('add') }}> Add Task </li>
            </ul>

            <div className='container'>
                { label && label ? showCpt(label) :  'loading label' }
                {/* { todos.loading ? 'loading ' : '' } */}
                { isModalOpen && removeTodo() }
            </div>
        </div>
    )
}

export default Todo;