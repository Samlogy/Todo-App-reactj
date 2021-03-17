import { TodoForm } from '../Organisms'
// import './style.css';

const RemoveTodo = props => {
    const { data } = props;

    
    return; 
}

export default RemoveTodo;

// const remove = todo => {
    //     const url = `/postId=${todo.id}`;

    //     fetch(url, { method: 'DELETE' })
    //     .then(res => res.json())
    //     .then(res => setTodos({ data: res, loading: false }))
    //     .catch(err => console.log(err.mesage));

    //     closeModal();
    // };
    
    // return <Modal title='Remove Task' text='Are you sure that you want to remove this item ?' onRemove={remove} />