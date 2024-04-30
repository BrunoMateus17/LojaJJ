import './Input.css'
function Input({id,name,classe,placeholder}){
    return(
        <input 
            type="text" 
            className={classe} 
            id={id} 
            name={name} 
            placeholder={placeholder} 
        />
    )
}

export default Input