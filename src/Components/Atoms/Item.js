
// import './style.css';

const Item = props => {
    const { label } = props;
    
    return <li className='list__item'> {label} </li>
}

export default Item;