
import { Item } from '../Atoms'
// import './style.css';

const ListItem = props => {
    const { data } = props;
    
    return  <ul className='list'> 
                { data.map((el, index) => <ListItem label={el} key={index} />) }
            </ul>
}

export default ListItem;