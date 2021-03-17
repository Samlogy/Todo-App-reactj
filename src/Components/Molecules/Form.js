
// import './style.css';

const Form = props => {
    const { children } = props;
    
    return <form method='POST'> {children} </form>
}

export default Form;