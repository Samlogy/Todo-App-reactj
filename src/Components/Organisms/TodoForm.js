import { useState } from 'react';

import { Header, Input, Label, Button } from '../Atoms';
import { Form, FormInput } from '../Molecules';
// import './style.css';

const EmptyObj = obj => {
    for (let key in obj){
        if(obj.hasOwnProperty(key)) console.log(`${key} : ${obj[key]}`)
     }
};
// const initState = () => {
    //     // si obj data not empty 
    //     if((Object.keys(data).length === 0 && data.constructor === Object) || EmptyObj(data) === true) return data;

    //     // sinon
    //     else return { userId: 1, id: 1, title: '', completed: false }
// };

const TodoForm = props => {
    const { data, label } = props;
    const [todo, setTodo] = useState({ userId: 1, id: 1, title: '', completed: false }); // single todo
    
    return  <div className='todo__container'>
                <Header style='add__header' type='h2' label={label} />
                
                <Form style='add__form'>
                    <FormInput>
                        <Label id='userId' label='User ID' />
                        <Input type='number' name='userId' placeholder='Enter User ID' value={todo.userId} 
                                onChange={e => setTodo({...todo, userId: e.target.value})} value={todo.userId} id='userId' />
                    </FormInput>
                    
                    <FormInput>
                        <Label id='id' label='ID' />
                        <Input type='number' name='id' placeholder='Enter ID' value={todo.id} 
                                onChange={e => setTodo({...todo, id: e.target.value})} value={todo.id} id='id' />
                    </FormInput>

                    <FormInput>
                        <Label id='title' label='Title' />
                        <Input type='text' name='title' placeholder='Enter Title' value={todo.id} 
                                onChange={e => setTodo({...todo, title: e.target.value})} value={todo.title} id='title' />
                    </FormInput>

                    <FormInput>
                        <Label id='completed' label='Completed' />
                        Yes <Input type='radio' name='completed' value={todo.completed} checked={todo.completed}
                                onChange={e => setTodo({...todo, completed: e.target.value})} id='completed' />
                        No <Input type='radio' name='completed' value={todo.completed} checked={todo.completed}
                                onChange={e => setTodo({...todo, completed: e.target.value})} id='completed' />
                    </FormInput>

                    <Button type='submit' style='btn btn--info' label='ADD Todo' />
                </Form>

            </div>
}

export default TodoForm;