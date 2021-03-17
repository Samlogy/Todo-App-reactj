
// import './style.css';

const Button = props => {
    const { type, style, label, icon } = props;
    
    return  <button type={type} className={style}> 
                {icon ? icon : ''} {label}
            </button> 
}

export default Button